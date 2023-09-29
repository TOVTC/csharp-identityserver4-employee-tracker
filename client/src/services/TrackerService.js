import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://localhost:6001/api/tracker',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default {
    async getDepartments() {
        try {
            return await apiClient.get(`/departments`);
        }
        catch (err) {
            console.log(err)
        }
    },
    async getRoles() {
        try {
            return await apiClient.get(`/roles`);
        }
        catch (err) {
            console.log(err)
        }
    },
    async getEmployees() {
        try {
            return await apiClient.get(`/employees`);
        }
        catch (err) {
            console.log(err)
        }
    },
}