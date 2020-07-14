require('dotenv/config');

const serverConfig = {
  HOST: process.env.HOST,
  PORT: process.env.PORT,
};

module.exports = serverConfig;
