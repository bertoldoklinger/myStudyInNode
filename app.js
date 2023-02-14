const express = require("express");
const path = require("path");

const app = express();
const port = 3001;

const basePath = path.join(__dirname, "templates");

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  //leitura da tabela users, resgatar um usuário do banco de dados
  console.log(`Estamos buscando pelo usuário: ${id}`);
  res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
