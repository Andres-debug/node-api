import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas de usuario
app.use('/api', userRoutes);

// Sincronizar la base de datos y arrancar el servidor
sequelize.sync().then(() => {
  console.log('Database synced!');
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(error => {
  console.log('Error syncing database:', error);
});
