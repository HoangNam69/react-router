import axios from "axios";

export const getUsers = () => {
  return axios.get("https://62fce6566e617f88dea09c30.mockapi.io/users/");
};

export const createUser = (item) => {
  return axios.post("https://62fce6566e617f88dea09c30.mockapi.io/users/", item);
};

export const editUser = (id, item) => {
  return axios.put(`https://62fce6566e617f88dea09c30.mockapi.io/users/${id}/`, item);
};

export const deleteUser = (id) => {
  return axios.delete(`https://62fce6566e617f88dea09c30.mockapi.io/users/${id}/`)
}