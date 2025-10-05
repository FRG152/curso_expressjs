export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Ocurrio un Error inesperado";

  console.error(
    `[ERROR] ${new Date().toISOString()} - ${statusCode} - ${message}}`
  );

  if (err.stack) {
    console.error(errorHandler.stack);
  }

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
