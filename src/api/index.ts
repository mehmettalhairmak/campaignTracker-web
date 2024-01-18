import axios from "axios";

const axiosInstance = axios.create({
	baseURL: `https://makromusic-web-task-api.onrender.com/`,
});

export default axiosInstance;
