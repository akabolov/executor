import { executeCommand } from '../helpers/promisifiedExec.js';
import { sudoValidation } from '../helpers/sudoValidation.js';
import { addCommand } from '../repository/execute.js';

export const executeService = async (command) => {
  sudoValidation(command);

  const { stdout } = await executeCommand(command);

  await addCommand({ name: command, result: stdout });

  return stdout;
};
