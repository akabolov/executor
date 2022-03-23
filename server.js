import { app } from './app.js';

const PORT = process.env.PORT || 7070;

app.listen(PORT, async () => {
  console.log(`App is started with pid: ${process.pid} and port: ${PORT}`);
});
