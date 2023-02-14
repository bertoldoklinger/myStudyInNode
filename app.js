const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
const basePath = path.join(__dirname, "templates");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/users/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

app.post("/users/save", (req, res) => {
  console.log(req.body);

  const { name, age } = req.body;

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);
});

app.get("/users/:id", (req, res) => {
  console.log(`Carregando usuário: ${req.params.id}`);

  res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
