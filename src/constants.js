export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://games-backend-ctzu.vercel.app"; // If using proxy
export const PRODUCTS_URL = "/api/products";
export const USERS_URL = "/api/users";
export const ORDERS_URL = "/api/orders";
export const PAYPAL_URL = "/api/config/paypal";
// export const BASE_URL = "https://games-backend-ctzu.vercel.app";
export const UPLOADS_URL = "/api/upload";
