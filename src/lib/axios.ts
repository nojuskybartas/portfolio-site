import axios from "axios";

const instance = axios.create({
    baseURL: 'localhost:3000/api'
    // baseURL: 'http://localhost:5001/tripadvisor-clone-432ea/us-central1/api'
  });
  
  export default instance;