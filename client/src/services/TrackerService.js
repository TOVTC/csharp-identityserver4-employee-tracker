import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://localhost:6001/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default {
    // export axios instance to implement axios interceptors in main.js to add Bearer token to headers
    apiClient,
    async getDepartments() {
        try {
            return await apiClient.get(`/tracker/departments`);
        }
        catch (err) {
            console.log(err)
        }
    },
    async getRoles() {
        try {
            return await apiClient.get(`/tracker/roles`);
        }
        catch (err) {
            console.log(err)
        }
    },
    async getEmployees() {
        try {
            return await apiClient.get(`/tracker/employees`);
        }
        catch (err) {
            console.log(err)
        }
    },
    async getAbout() {
        try {
            return await apiClient.get(`/about`);
        }
        catch (err) {
            console.log(err)
        }
    }
}