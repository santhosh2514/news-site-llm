const bunyan = require('bunyan');

const logger = bunyan.createLogger({ name: 'newsController' });

const getNewsList = async (req, res) => {
  logger.info({ method: 'getNewsList' }, "Getting news list");
  try {

  } catch (error) {
    logger.error({ method: 'getNewsList', err: error }, "Error in getting news list");
  }
}

module.exports = {
  getNewsList,
}
