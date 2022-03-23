import express from 'express';
import { initDb } from './database/init.js';

import { errorMiddleware } from './helpers/errorMiddleware.js';
import executeRouter from './routes/execute.js';

export const app = express();

app.use(express.json());
app.use(executeRouter);
app.use(errorMiddleware);

initDb();
