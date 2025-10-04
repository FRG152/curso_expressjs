const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Ocurrio un Error inesperado";

  console.error(
    `[ERROR] ${new Date().toISOString()} - ${statusCode} - ${message}}`
  );
};
