import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import router from './routes/index.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(router);


export default app;