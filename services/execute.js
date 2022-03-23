import { executeCommand } from '../helpers/promisifiedExec.js';

export const executeService = async (command) => {
  const { stdout } = await executeCommand(command);

  return stdout;
};
