const express = require('express');
const router = express.Router();

const newsController = require('./newsController');

module.exports = () => {
    router.route(`/getNewsList`)
        .post(newsController.getNewsList);
    return router;
}