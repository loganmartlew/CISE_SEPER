const { Router } = require('express');
const loadRoutes = require('./routes');

module.exports = () => {
  const app = Router();

  app.use(loadRoutes());

  return app;
};
