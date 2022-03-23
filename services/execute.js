import { executeCommand } from '../helpers/promisifiedExec.js';
import { addCommand } from '../repository/execute.js';

export const executeService = async (command) => {
  const { stdout } = await executeCommand(command);

  await addCommand({ name: command, result: stdout });

  return stdout;
};
