import express from 'express';
const app = express();

import * as dotenv from 'dotenv';
dotenv.config()

app.use(express.json());

export default app;