import express from 'express'
import Produtores from "../models/Produtores.js"

const router = express.Router()

// ROTA PRODUTOS
router.get("/produtores", function (req, res) {
    Produtores.findAll().then(produtos => {
        res.render("produtores", { produtos: produtos })
    })

})
router.post("/produtores/new", function (req, res) {
    try {
        const produtoresDados = req.body;
        const produtores = Produtores.create({ nome: produtoresDados.nome, preco: produtoresDados.preco, categoria: produtoresDados.categoria, })
        res.status(201).send("Cadastrado")
    } catch (e) {
        console.error("erro", e);
        res.status(400);
    }
})

router.get("/produtores/delete/:id", (req, res) => {
    const id = req.params.id
    Produtores.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/produtores")
    })
})

router.get("/produtores/edit/:id", (req, res) => {
    const id = req.params.id
    Produtores.findByPk(id).then(function (produtores) {
        res.render("produtoresEdit", {
            produtores: produtores
        })
    })
})

router.post("/produtores/update/:id", (req, res) => {
    const id = req.params.id
    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco
    Produtores.update(
        {
            nome: nome,
            cpf: cpf,
            endereco: endereco
        },
        { where: { id: id } }
    ).then(() => {
        res.redirect("/produtores")
    })
})

export default router;