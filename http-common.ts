import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.71.115/api/atmos",
  headers: {
    "Content-type": "application/json",
    "Header": "Access-Control-Allow-Origin"
  }
})