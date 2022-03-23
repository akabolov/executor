import mongoose from 'mongoose';

const { Schema } = mongoose;

const commandSchema = new Schema({
  name: String,
  result: String,
  firstRun: {
    type: Date,
    default: Date.now(),
  },
  lastRun: {
    type: Date,
    default: Date.now(),
  },
  runQuantity: {
    type: Number,
    default: 1,
  },
});

export const CommandModel = mongoose.model('Command', commandSchema);
