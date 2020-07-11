import express from 'express';
import morgan from 'morgan';
import watsonRoutes from '../routes/watson';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(watsonRoutes);

export default app;