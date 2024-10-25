import express from 'express';
import Fazenda from "../models/Fazenda.js"
const router = express.Router()

// ROTA PEDIDOS
router.get("/fazenda", function (req, res) {
    Fazenda.findAll().then(fazenda => {
        res.render("fazenda", { fazenda })
    })

})

router.post("/fazenda/new", function (req, res) {
    try {
        const fazendaDados = req.body;
        const fazenda = Fazenda.create({ numero: fazendaDados.numero, valor: pedidoDados.valor })
        res.status(201).send("Cadastrado")
    } catch (e) {
        console.error("erro", e);
        res.status(400);
    }
})
router.get("/fazenda/delete/:id", (req, res) => {
    const id = req.params.id
    Fazenda.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/fazenda")
    })
})

router.get("/fazenda/edit/:id", (req, res) => {
    const id = req.params.id
    Fazenda.findByPk(id).then(function (fazenda) {
        res.render("fazendaEdit", {
            fazenda: fazenda
        })
    })
})

router.post("/fazenda/update/:id", (req, res) => {
    const id = req.params.id
    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco
    Fazenda.update(
        {
            nome: nome,
            cpf: cpf,
            endereco: endereco
        },
        { where: { id: id } }
    ).then(() => {
        res.redirect("/fazenda")
    })
})

export default router