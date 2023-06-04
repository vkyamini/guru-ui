import axios from "axios";

const API_URL = "http://localhost:3001" // if its production, use heroku or use localhost.
console.log(process.env);

const API = {
    getAllUsers: (loginDetails) => 
    // axios will promise to make a POST request to the url, with the details in "logindetails".
        axios.post(`${API_URL}/api/users/login`, loginDetails)
}

export default API;