const axios = require("axios");

const apiClient = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 5000,
});

const getUsersList = async (page) => {
  try {
    if (page) {
      return await apiClient.get(`/users?page=${page}`);
    } else {
      return await apiClient.get(`/users`);
    }
  } catch (error) {
    console.error(`Error getting list of users:`, error);
    throw error;
  }
};

const checkUserExists = async (userId) => {
  try {
    return await apiClient.get(`/users/${userId}`);
  } catch (error) {
    console.error(`Error getting user with ID ${userId}:`, error);
    throw error;
  }
};

const createUser = async (userData) => {
  try {
    return await apiClient.post("/users", userData);
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

const updateUser = async (userId, userData) => {
  try {
    return await apiClient.put(`/users/${userId}`, userData);
  } catch (error) {
    console.error(`Error updating user with ID ${userId}:`, error);
    throw error;
  }
};

const deleteUser = async (userId) => {
  try {
    return await apiClient.delete(`/users/${userId}`);
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
