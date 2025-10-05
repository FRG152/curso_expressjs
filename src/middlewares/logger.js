// Middleware sirve como intermediario cuando se hace una solitud a nuestra api

export const LoggerMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp} ${req.method} ${req.url} - IP: ${req.ip}]`);

  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`[${timestamp} Response: ${res.statusCode} - ${duration}ms]`);
  });

  next(); // Pase a la siguiente accion (Ej: Cuando halla hecho todo el log continue con el response de la endpoint)
};
