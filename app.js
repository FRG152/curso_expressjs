import fs from "fs";
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const app = express();

const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const usersFilePath = path.join(__dirname, "users.json");

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
  const name = req.body.name || "Anonimo";
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

app.get("/users", (req, res) => {
  fs.readFile(usersFilePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error con la conexion de datos" });
    }
    const users = JSON.parse(data);
    res.json(users);
  });
});

app.post("/users", (req, res) => {
  const newUsers = req.body;
  if (newUsers.name.length === 0 || newUsers.name === "") {
    res.status(500).json({ error: "name no esta definido" });
  }
  fs.readFile(usersFilePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error con la conexion de datos." });
    }

    const users = JSON.parse(data);
    users.push(newUsers);

    fs.writeFile(
      usersFilePath,
      JSON.stringify(users, null, 2, (err) => {
        if (err)
          res.status(500).json({ error: "No se pudo guardar el usuario" });
      })
    );
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
