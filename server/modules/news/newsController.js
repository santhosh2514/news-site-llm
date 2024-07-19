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
    res.status(500).json("Error in getting news list");
  }
}

const summarizeNews = async (req, res) => {
  logger.info({ method: 'summarizeNews' }, "Summarizing news");
  const { url } = req.query;
  try {
    const newsSummary = await newsService.summarizeNews({ url });

    if (newsSummary?.response?.candidates?.length > 0) {
      const errorResponse = "Sorry, I couldn't summarize the news article due to safety concerns. Please try some other article.";
      return res.status(400).json(errorResponse);
    }

    res.json(newsSummary)
  } catch (error) {
    logger.error({ method: 'summarizeNews', err: error }, "Error in summarizing news");
    res.status(500).json("Error in summarizing news");
  }
}

module.exports = {
  getNewsList,
  summarizeNews
}
