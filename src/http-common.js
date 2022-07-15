import axios from "axios";export default axios.create({
    baseURL: "http://localhost:8080/api",//這裡是是後端的 REST API url 
    headers: {
      "Content-type": "application/json"
    }
  });