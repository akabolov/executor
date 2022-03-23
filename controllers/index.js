import { executeService } from '../services/execute.js';

export const executeController = async (req, res) => {
  const { command } = req.body;

  const execResult = await executeService(command);

  res.json({ result: execResult, command });
};
