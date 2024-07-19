const bunyan = require('bunyan');
const newsService = require('./newsService');

const logger = bunyan.createLogger({ name: 'newsController' });

const getNewsList = async (req, res) => {
  logger.info({ method: 'getNewsList' }, "Getting news list");

  try {
    const newsList = await newsService.getNewsList();
    res.json(newsList)
  } catch (error) {
    logger.error({ method: 'getNewsList', err: error }, "Error in getting news list");
  }
}

module.exports = {
  getNewsList,
}
