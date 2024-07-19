const axios = require('axios');
const logger = require('bunyan'); // Adjust the path as necessary

const axiosInstance = axios.create();

// Function to make GET requests
const get = async (url, params = {}, headers = {}) => {
  try {
    const response = await axiosInstance.get(url, { params, headers });
    console.log(response);
    return response.data;
  } catch (error) {
    logger.error({ err: error }, 'Error in Axios Adapter GET request');
    throw error; // Rethrowing the error to be handled by the caller
  }
};

module.exports = { get };