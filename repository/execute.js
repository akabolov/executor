import { CommandModel } from '../database/models/Command.js';

export const addCommand = async (command) => {
  const { name, result } = command;
  try {
    const existingCommand = await CommandModel.findOne({ name, result });

    if (existingCommand) {
      existingCommand.runQuantity += 1;
      existingCommand.lastRun = Date.now();
      await existingCommand.save();
    } else {
      const newCommand = new CommandModel(command);
      await newCommand.save();
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
