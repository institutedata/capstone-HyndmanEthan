

const GLOBAL = {
    GOOGLE_MAPS_API_KEY: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    GOOGLE_MAPS_ID: import.meta.env.VITE_GOOGLE_MAPS_ID,
    SERVER_URL: import.meta.env.VITE_SERVER_URL 
}

export const defaultPosition = { lat: -36.84832680201343, lng: 174.76221758918274 };
export const defaultZoomLevel = 13;

export default GLOBAL


