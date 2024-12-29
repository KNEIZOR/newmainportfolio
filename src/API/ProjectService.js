import axios from "axios";

export default class ProjectService {
    static async getAll(endPoint) {
        const response = await axios.get(`http://localhost:3000/${endPoint}`);
        return response.data;
    }

    static async getById(endPoint ,id) {
        const response = await axios.get(`http://localhost:3000/${endPoint}/${id}`);
        return response.data;
    }

    static async post(endPoint, data) {
        await axios.post(`http://localhost:3000/${endPoint}`, data);
    }
}
