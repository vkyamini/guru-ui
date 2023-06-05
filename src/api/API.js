import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://guru-api.herokuapp.com"
    : "http://localhost:3001";

const API = {
  getAllUsers: (loginDetails) =>
    axios.post(`${API_URL}/api/users/login`, loginDetails),

  creatUsers: (signupDetails) =>
    axios.post(`${API_URL}/api/users`, signupDetails),

  searchBar: (skill) => axios.get(`${API_URL}/api/users/skills/${skill}`),

  getSingleUser: (userid) => {
    const token = localStorage.getItem("token");
    return axios.get(`${API_URL}/api/users/${userid}`, {
      headers: { Authorization: "Bearer " + token },
    });
  },
};

export default API;
