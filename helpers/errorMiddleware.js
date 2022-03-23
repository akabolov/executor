export const errorMiddleware = async (err, req, res, next) => {
  const { command } = req.body;
  res.status(500);
  res.send({
    command,
    error: err.stderr,
  });
};
