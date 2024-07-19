
'use strict';

const express = require('express');

const newsRoutes = require('./modules/news/newsRoutes');

const apiRouter = express.Router();

module.exports = () =>
  apiRouter
    .use('/news', newsRoutes())
    .all('*', () => {
      throw new NotFoundError();
    });
