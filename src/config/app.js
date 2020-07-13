import express from 'express';
import morgan from 'morgan';
import watsonRoutes from '../routes/watson';
import cors from 'cors';

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(watsonRoutes);

export default app;
