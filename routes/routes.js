const express = require("express");
const Services = require("../services/services");
const router = express.Router();

//ROTA PARA SERVIÇO DE CREATE 
router.post("/usuarios/Create", Services.UsuarioCreate);

router.get("/", (req, res) => {
  res.send("Seja bem Vindo ao  Sistema de Cadastro de Usuarios.");
})

router.get("/usuarios/cadastrar", (req, res) => { res.render("usuarios/cadastrar"); })

//ROTA SERVIÇO CADASTRO
router.post("/usuarios/Create", Services.UsuarioCreate);

//ROTA SERVIÇO LISTAS
router.get("/usuarios/listar", Services.UsuarioListar);

/*
//ROTA UPADTE
router.get("/usuarios/Atualizar/:id_usuario/:titulo/:descricao", (req, res) => {
  let usuarios = {
    id_usuario: req.params.id_usuario,
    titulo: req.params.titulo,
    descricao: req.params.descricao
  }
  res.render("usuarios/update", { usuarios });
})

router.post("/usuarios/Update", Services.usuarioUpdate);
//ROTA PARA O SERVIÇO DE DELETE 
router.post("/usuarios/Delete", Services.usuarioDelete);
*/
module.exports = router;
