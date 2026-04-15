// filters.js

// Initial state for the filter
const initialState = {
    destination: '',  // Store selected destination
    dates: { startDate: null, endDate: null },  // Store travel dates
    priceRange: { min: 0, max: 1000 },  // Store price range
    amenities: []  // Store list of selected amenities
};

// Action Types
const SET_DESTINATION = 'SET_DESTINATION';
const SET_DATES = 'SET_DATES';
const SET_PRICE_RANGE = 'SET_PRICE_RANGE';
const TOGGLE_AMENITY = 'TOGGLE_AMENITY';

// Reducer
function filterReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DESTINATION:
            return { ...state, destination: action.payload };
        case SET_DATES:
            return { ...state, dates: action.payload };
        case SET_PRICE_RANGE:
            return { ...state, priceRange: action.payload };
        case TOGGLE_AMENITY:
            const amenities = state.amenities.includes(action.payload)
                ? state.amenities.filter(a => a !== action.payload)
                : [...state.amenities, action.payload];
            return { ...state, amenities };
        default:
            return state;
    }
}

// Action Creators
const setDestination = (destination) => ({ type: SET_DESTINATION, payload: destination });
const setDates = (dates) => ({ type: SET_DATES, payload: dates });
const setPriceRange = (range) => ({ type: SET_PRICE_RANGE, payload: range });
const toggleAmenity = (amenity) => ({ type: TOGGLE_AMENITY, payload: amenity });

export { filterReducer, setDestination, setDates, setPriceRange, toggleAmenity };