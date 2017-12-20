import axios from 'axios';
// API key for weather api
const API_KEY = '94e122e1d2a0e24914d452dd3539903a';
const rootURL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
// Type for reducer.
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
    // Create URL for request.
    const url = `${rootURL}&q=${city}, us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}