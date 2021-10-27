// axios connect the front with back
// service setup the config for the connection
import axios from "axios";

export default class BoatService {
  constructor() {
    this.instance = axios.create({
        // REACT_APP_API_URL=http://localhost:5000/api comes from file .env
        baseURL: process.env.REACT_APP_API_URL,
        // withCredentials=true create cookies so cors (server) can reconize with user is in session
        withCredentials: true,
    });
  }

  create = (data) => this.instance.post("/boat", data);
  get = () => this.instance.get("/boat");
  getOne = (id) => this.instance.get(`/boat/${id}`);
  deleteOne = (id) => this.instance.delete(`/boat/${id}`);
  updateOne = (id, data) => this.instance.put(`/boat/${id}`, data);
}