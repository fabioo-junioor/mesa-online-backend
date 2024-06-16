import express from 'express';
import * as dotenv from 'dotenv';
import router from './routes/routes.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(router);



export default app;