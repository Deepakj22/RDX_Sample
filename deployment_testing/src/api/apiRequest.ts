import axios from "axios";

const apiRequest = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL_SECURE,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10000
});

apiRequest.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        // Only add token if it exists and hasn't been added yet
        if (token && !config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

apiRequest.interceptors.response.use(
    (response) => response,
    (error) => {
        // Example: Handle global 401 (Unauthorized)
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }

        // Generic error logging
        const message = error.response?.data?.message || "Something went wrong";
        console.error("API Error:", message);

        return Promise.reject(error);
    }
);

export default apiRequest;