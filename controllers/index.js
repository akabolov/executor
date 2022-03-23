export const executeController = async (req, res) => {
  const command = req.body;

  res.json(command);
};
