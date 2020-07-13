import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import watsonRoutes from '../routes/watson';

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(watsonRoutes);

export default app;
