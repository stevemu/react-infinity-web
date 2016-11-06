var isProduction = process.env.NODE_ENV == "production";
var SERVER_PORT = process.env.SERVER_PORT;

// root urls
export const SERVER_URL = isProduction ? "/" : `http://localhost:${SERVER_PORT}/`;
export const API_URL = `${SERVER_URL}api/`;

// static
export const UPLOADS_URL = `${SERVER_URL}uploads/`;

// endpoints
export const UPLOADS_ENDPOINT = `${API_URL}image-upload/`;
export const PRODUCTS_ENDPOINT = `${API_URL}products/`;
export const ORDERS_ENDPOINT = `${API_URL}orders/`;
