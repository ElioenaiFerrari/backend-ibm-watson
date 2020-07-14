require('dotenv/config');

const dbConfig = {
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  dialect: process.env.DATABASE_DIALECT,
  password: process.env.DATABASE_PASSWORD,
  username: process.env.DATABASE_USERNAME,
  define: {
    underscored: true,
    timestamps: true,
  },
};

module.exports = dbConfig;
