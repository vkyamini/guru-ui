import axios from "axios";

const API_URL = process.env.NODE_ENV === "production" ? 
    "https://guru-api.herokuapp.com" : "http://localhost:3001"

const API = {
    getAllUsers: (loginDetails) => 
    // axios will promise to make a POST request to the url, with the details in "logindetails".
        axios.post(`${API_URL}/api/users/login`, loginDetails)
}

export default API;