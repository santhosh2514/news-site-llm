const axios = require('axios');
const logger = require('bunyan');

const axiosInstance = axios.create();

// Function to make GET requests
const get = async (url, params = {}, headers = {}) => {
  try {
    const response = await axiosInstance.get(url, { params, headers });
    return response.data;
  } catch (error) {
    logger.error({ err: error }, 'Error in Axios Adapter GET request');
    throw error;
  }
};

module.exports = { get };