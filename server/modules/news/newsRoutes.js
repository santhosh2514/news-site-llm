const express = require('express');
const router = express.Router();

const newsController = require('./newsController');

module.exports = () => {
    router.route(`/getNewsList`)
        .get(newsController.getNewsList);
    return router;
}