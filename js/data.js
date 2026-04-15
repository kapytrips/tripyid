// data.js

/**
 * Loads data from a given URL.
 * @param {string} url - The URL from which to load data.
 * @returns {Promise<Object>} - The loaded data as a JSON object.
 */
async function loadData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

/**
 * Normalizes the trip data to a consistent format.
 * @param {Array<Object>} trips - The array of trip data objects.
 * @returns {Array<Object>} - The normalized trip data.
 */
function normalizeTrips(trips) {
    return trips.map(trip => ({
        id: trip.id || trip.trip_id,
        name: trip.name || trip.trip_name,
        destination: trip.destination || trip.trip_destination,
        date: new Date(trip.date || trip.trip_date).toISOString(),
    }));
}

export { loadData, normalizeTrips };