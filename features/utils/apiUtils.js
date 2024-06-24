const axios = require('axios');

async function checkUserExists(userId) {
  try {
    const response = await axios.get(`https://reqres.in/api/users/${userId}`);
    return response.status === 200; 
  } catch (error) {
    return false; 
  }
}

module.exports = {
  checkUserExists
};