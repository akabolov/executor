import mongoose from 'mongoose';

export const initDb = () => {
  mongoose
    .connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/executor')
    .then(() => {
      console.log('Connected to database');
    })
    .catch((error) => {
      console.error('Error connecting to database', error);
    });
};
