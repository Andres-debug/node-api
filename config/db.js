import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql', // Cambia a 'mysql' para usar MySQL
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Railway requiere SSL con este ajuste
    },
  },
});

export default sequelize;
