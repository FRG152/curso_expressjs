import express from "express";
import bodyParser from "body-parser";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta principal.
app.get("/", (req, res) => {
  res.send(`
    <h1>Curso Express.js V5</h1>
    <p>Esto es una aplicacion node.js con express.js</p>
    <p>Corre en el puerto: ${PORT}</p>
  `);
});

// Rutas dinamicas.
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Mostrar informacion del usuario con ID: ${userId}`);
});

// Por parametros (parametros de la url).
app.get("/search", (req, res) => {
  const terms = req.query.termino || "No especificado";
  const category = req.query.category || "Todas";
  res.send(`
    <h2>Resultados de busqueda:</h2>
    <p>Termino: ${terms}</p>
    <p>Categoria: ${category}</p>
  `);
});

// Para recibir la informacion.
app.post("/form", (req, res) => {
  const name = req.body.nombre || "Anonimo";
  const email = req.body.email || "No proporcionado";
  res.json({
    message: "Datos recibidos",
    data: {
      name,
      email,
    },
  });
});

app.post("/api/data", (req, res) => {
  const data = req.body;
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ error: "No se recibieron datos" });
  }

  res.status(201).json({ message: "Datos JSON recibidos", data });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
