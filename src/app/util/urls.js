var isProduction = process.env.NODE_ENV == "production";

// root urls
export const SERVER_URL = isProduction ? "/" : "http://localhost:3000/";
export const API_URL = `${SERVER_URL}api/`;

// endpoints
export const UPLOADS_URL = `${SERVER_URL}uploads/`;
export const PRODUCTS_ENDPOINT = `${API_URL}products/`;
export const ORDERS_ENDPOINT = `${API_URL}orders/`;
