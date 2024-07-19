const bunyan = require('bunyan');

const { get } = require('../../utils/axiosAdapter');
const NEWS_API_KEY = process.env.NEWS_API_KEY;

const logger = bunyan.createLogger({ name: 'newsService' });

const getNewsList = async () => {
     try {
        const newsList = await get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`);
        return newsList
     } catch (error) {
        logger.error({ err: error }, 'Error in getting news list');
        return error
     }
}

module.exports = { 
    getNewsList
} 