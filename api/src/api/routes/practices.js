const { Router } = require('express');
const PracticeService = require('../../services/PracticeService');

module.exports = () => {
  const app = Router();

  app.get('/', async (_, res) => {
    const practices = await PracticeService.getPractices();
    return res.status(200).json(practices);
  });

  app.post('/', async (req, res) => {
    const { name } = req.body;
    const practice = await PracticeService.addPractice(name);
    return res.status(201).json(practice);
  });

  return app;
};
