import { exec } from 'child_process';
import { promisify } from 'util';

const executeCommand = promisify(exec);

export const executeService = async (command) => {
  try {
    const { stdout, stderr } = await executeCommand(command);

    return stdout;
  } catch (error) {}
};
