const fs = require("fs");

const getAll = (req, res) => {
  console.log(req.url);
  res.status(200).send("ok");
};

const getById = (req, res) => {
  const id = req.params.id;
  res.status(200).send("ok");
};

const postTarefa = (req, res) => {
  console.log(req.body);
  res.status(200).send("ok");

};

const deleteTarefa = (req, res) => {
  res.status(200).send("ok");

};

const deleteTarefaConcluida = (req, res) => {
  res.status(200).send("ok");
}

const putTarefa = (req, res) => {
  res.status(200).send("ok");
}

module.exports = {
  getAll,
  getById,
  postTarefa,
  deleteTarefa,
  deleteTarefaConcluida,
  putTarefa
};
