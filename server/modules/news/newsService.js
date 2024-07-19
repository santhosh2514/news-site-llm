const bunyan = require('bunyan');
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');
const axios = require('axios');

const { get } = require('../../utils/axiosAdapter');
const { geminiAdapter } = require('../../utils/geminiAdapter');

const NEWS_API_KEY = process.env.NEWS_API_KEY;

const logger = bunyan.createLogger({ name: 'newsService' });

const getNewsList = async () => {
    try {
        const newsList = await get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${NEWS_API_KEY}`);
        return newsList
    } catch (error) {
        logger.error({ err: error }, 'Error in getting news list');
        return error
    }
}

const summarizeNews = async (opts) => {
    const { url } = opts;
    try {
        const newsContent = await scrapeNews({ url });
        const prompt = `Summarize the news article in one sentence - ${newsContent}`;
        let newsSummary = await geminiAdapter(prompt);
        return newsSummary
    } catch (error) {
        logger.error({ err: error }, 'Error in summarizing news');
        return error
    }
}

const scrapeNews = async (opts) => {
    let { url } = opts;
    try {
        const response = await axios.get(url);
        const html = response.data;

        const dom = new JSDOM(html, {
            url: url
        });

        const reader = new Readability(dom.window.document);
        const article = reader.parse();
        return article?.textContent;
    } catch (error) {
        logger.error({ err: error }, 'Error in scraping webpage');
    }
}

module.exports = {
    getNewsList,
    summarizeNews,
    scrapeNews
}