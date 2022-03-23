import express from 'express';

import { errorMiddleware } from './helpers/errorMiddleware.js';
import executeRouter from './routes/execute.js';

const app = express();
const PORT = process.env.PORT || 7070;

app.use(express.json());
app.use(executeRouter);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`App is started with pid: ${process.pid} and port: ${PORT}`);
});
