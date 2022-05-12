const { getApp } = require('./src/app');
const loaders = require('./src/loaders');

const startApp = async () => {
  const app = getApp();

  await loaders(app);

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}...`);
    console.log(`Live at: http://localhost:${PORT}`);
  });
};

startApp();
