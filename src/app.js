import express from 'express';
const app = express();

import cors from 'cors';
app.use(cors());

import * as dotenv from 'dotenv';
dotenv.config();

app.use(express.json());

import router from './routes/index.js';

app.use(router);


export default app;