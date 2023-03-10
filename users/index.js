const express = require("express");
const router = express.Router();

const path = require("path");

const basePath = path.join(__dirname, "../templates");

router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

router.post("/save", (req, res) => {
  console.log(req.body);

  const { name, age } = req.body;

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);
});

router.get("/:id", (req, res) => {
  console.log(`Carregando usuário: ${req.params.id}`);

  res.sendFile(`${basePath}/users.html`);
});

module.exports = router;
