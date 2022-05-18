const { Router } = require('express');
const articleRoutes = require('./articles');
const practiceRoutes = require('./practices');

module.exports = () => {
  const app = Router();

  app.use('/articles', articleRoutes());
  app.use('/practices', practiceRoutes());

  return app;
};
