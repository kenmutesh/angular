import axios, { AxiosInstance } from 'axios';

// Create an instance of Axios with the desired configuration
const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
  headers: {
    // Include the CSRF token in the headers
    'Content-Type': 'application/json',
    'X-CSRF-Token': 'your_csrf_token_value_here'
  }
});

export default api;
