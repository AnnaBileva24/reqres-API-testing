const axios = require("axios");

const apiClient = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 5000,
});

const getUsersList = async (page) => {
  try {
    let response = "";
    if (page) {
      response = await apiClient.get(`/users?page=${page}`);
    } else {
      response = await apiClient.get(`/users`);
    }
    return response;
  } catch (error) {
    console.error(`Error getting list of users:`, error);
    throw error;
  }
};

const checkUserExists = async (userId) => {
  try {
    const response = await apiClient.get(`/users/${userId}`);
    return response;
  } catch (error) {
    console.error(`Error getting user with ID ${userId}:`, error);
    throw error;
  }
};

const createUser = async (userData) => {
  try {
    const response = await apiClient.post("/users", userData);
    return response;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

const updateUser = async (userId, userData) => {
  try {
    const response = await apiClient.put(`/users/${userId}`, userData);
    return response;
  } catch (error) {
    console.error(`Error updating user with ID ${userId}:`, error);
    throw error;
  }
};

const deleteUser = async (userId) => {
  try {
    const response = await apiClient.delete(`/users/${userId}`);
    return response;
  } catch (error) {
    console.error(`Error deleting user with ID ${userId}:`, error);
    throw error;
  }
};

module.exports = {
  getUsersList,
  checkUserExists,
  createUser,
  updateUser,
  deleteUser,
};
