const { Router } = require('express');
const PracticeService = require('../../services/PracticeService');

module.exports = () => {
  const app = Router();

  app.get('/', async (_, res) => {
    const practices = await PracticeService.getPractices();
    return res.status(200).json(practices);
  });

  return app;
};
