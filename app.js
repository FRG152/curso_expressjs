import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Curso Express.js V5</h1>
    <p>Esto es una aplicacion node.js con express.js</p>
    <p>Corre en el puerto: ${PORT}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
