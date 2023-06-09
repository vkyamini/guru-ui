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

  searchLocation:(location)=>{
    const token = localStorage.getItem("token");
    return axios.get(`${API_URL}/api/users/location/${location}`, {
      headers: { Authorization: "Bearer " + token },
    });

  },

  searchskillsLocation:(location,skill)=>{
    const token = localStorage.getItem("token");
    return axios.get(`${API_URL}/api/users/location/${location}/skill/${skill}`, {
      headers: { Authorization: "Bearer " + token },
    });

  },

  searchBar: (skill) => {
    const token = localStorage.getItem("token");
    return axios.get(`${API_URL}/api/users/skills/${skill}`, {
      headers: { Authorization: "Bearer " + token },
    });
  },

  searchUnknownBar: (skill) => {
    const token = localStorage.getItem("token");
    return axios.get(`${API_URL}/api//users/unknownskills/${skill}`, {
      headers: { Authorization: "Bearer " + token },
    });
  },

  createOffer: (offer) => axios.post(`${API_URL}/api/offers`, offer),

  getSingleUser: (userid) => {
    const token = localStorage.getItem("token");
    return axios.get(`${API_URL}/api/users/${userid}`, {
      headers: { Authorization: "Bearer " + token },
    });
  },

  getOffersByUser: (userid) => {
    return axios.get(`${API_URL}/api/offers/user/${userid}`);
  },

  showOfferscreatedbyUser: (senderId) => {
    return axios.get(`${API_URL}/api/offers/oneuser/${senderId}`);
  },

  editStatusinOffers: (offersId, offerDetails) => {
    return axios.put(`${API_URL}/api/offers/${offersId}`, offerDetails);
  },

  editUser: (userid, userDetails) => {
    const token = localStorage.getItem("token");
    return axios.put(`${API_URL}/api/users/${userid}`, userDetails, {
      headers: {
        Authorization: "Bearer " + token, //the token is a variable which holds the token
      },
    });
  },
};

export default API;
