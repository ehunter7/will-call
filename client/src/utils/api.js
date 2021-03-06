import axios from "axios";

//eslint-disable-next-line
export default {
  //pickup routes
  newPickup: (data) => {
    return axios.post("/api/pu/newPickup", data);
  },
  getPickups: () => {
    return axios.get("/api/pu/getPickups");
  },
  updatePU: (id, data) => {
    return axios.put("/api/pu/updatePU", { id, data });
  },
  pickedUp: (id, data, puNumber) => {
    return axios.put("/api/pu/pickedUp", { id, data, puNumber });
  },
  getCompleted: () => {
    return axios.get("/api/pu/getCompleted");
  },
  cancelPickup: (data) => {
    return axios.delete("/api/pu/cancelPickup", { data });
  },
  setToCancel: (data) => {
    return axios.put("/api/pu/setToCancel", { data });
  },

  //user routes
  newuser: (data) => {
    return axios.post("/api/users/newuser", data);
  },
  login: (data) => {
    return axios.post("/api/users/login", data);
  },
  logout: () => {
    return axios.post("/api/users/logout");
  },
  getUsers: () => {
    return axios.get("/api/users/getusers");
  },
  updateUser: (data, field, update) => {
    return axios.put("/api/users/updateUser", { data, field, update });
  },
};
