import axios from "axios";


const baseUrl = process.env.NEXT_PUBLIC_API_URL + "api/v1";

/**
 *
 */
const axiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
});

// Adding Auhorization header to every request if token is available
axiosInstance.interceptors.request.use((config) => {
    // const token = store.getState().auth.token;
    const token = "";

    //
    if (config.headers && token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

//
export default axiosInstance;
