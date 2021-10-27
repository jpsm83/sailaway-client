// axios connect the front with back
// service setup the config for the connection
import axios from "axios";

export default class BoatService {
  constructor() {
    this.instance = axios.create({
        // REACT_APP_API_URL=http://localhost:5000/api comes from file .env
        // line below supose to work and the url should be hide in the .env file - some how not working
        // baseURL: `${process.env.REACT_APP_API_URL}/boat`,

        // I hard coded the url - that not the way to do it but still working in a solution
        baseURL: 'http://localhost:5000/api/boat',
        
        // withCredentials=true create cookies so cors (server) can reconize with user is in session
        withCredentials: true,
    });
  }

  create = (data) => this.instance.post("/", data);
  get = () => this.instance.get("/");
  getOne = (id) => this.instance.get(`/${id}`);
  deleteOne = (id) => this.instance.delete(`/${id}`);
  updateOne = (id, data) => this.instance.put(`/${id}`, data);
}