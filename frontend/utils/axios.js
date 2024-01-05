import axios from "axios";

const BASE_API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const instanceAxios = axios.create({
	// Configuration
	baseURL: BASE_API_URL,
	timeout: 5000,
});

export default instanceAxios;
