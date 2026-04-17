const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const createApiUrl = (path) => `${API_BASE_URL}${path}`;

export const API_ENDPOINTS = {
  login: createApiUrl(import.meta.env.VITE_LOGIN_API || "/login"),
  signup: createApiUrl(import.meta.env.VITE_SIGNUP_API || "/signup"),
  sales: createApiUrl(import.meta.env.VITE_SALES_API || "/management/sales"),
};
