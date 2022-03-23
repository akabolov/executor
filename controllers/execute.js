import { executeService } from '../services/execute.js';
import { asyncHandler } from '../helpers/asyncHandler.js';

export const executeController = asyncHandler(async (req, res) => {
  const { command } = req.body;

  const execResult = await executeService(command);

  res.json({ result: execResult, command });
});
