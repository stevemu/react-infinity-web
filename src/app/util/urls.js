var isProduction = process.env.NODE_ENV == "production";
var SERVER_PORT = process.env.SERVER_PORT || 3000;

// root urls
export const SERVER_URL = isProduction ? "/" : `http://localhost:${SERVER_PORT}/`;
export const API_URL = `${SERVER_URL}api/`;

// endpoints
export const UPLOADS_URL = `${SERVER_URL}uploads/`;
export const PRODUCTS_ENDPOINT = `${API_URL}products/`;
export const ORDERS_ENDPOINT = `${API_URL}orders/`;
