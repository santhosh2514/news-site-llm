const express = require('express');
const router = express.Router();

const newsController = require('./newsController');

module.exports = () => {
    router.route(`/getNewsList`)
        .get(newsController.getNewsList);
    router.route(`/summarizeNews`)
        .get(newsController.summarizeNews);
    return router;
}