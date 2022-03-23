import express from 'express';

import router from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 7070;

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`App is started with pid: ${process.pid} and port: ${PORT}`);
});
