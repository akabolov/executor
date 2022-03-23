import mongoose from 'mongoose';

export const initDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost/executor');
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database', error);
  }
};
