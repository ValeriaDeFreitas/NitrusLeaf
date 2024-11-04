import express from 'express'
import HisTal from "../models/HisTal.js"

const router = express.Router()

// ROTA HISTAL
router.get("/histal", function (req, res) {
    HisTal.findAll().then(histal => {
        res.render("histal", { histal: histal })
    })

})
router.post("/histal/new", function (req, res) {
    try {
        const histalDados = req.body;
        const histal = histal.create({ planta: histalDados.planta, status: histalDados.status })
        res.status(201).send("Cadastrado")
    } catch (e) {
        console.error("erro", e);
        res.status(400);
    }
})

router.get("/histal/delete/:id", (req, res) => {
    const id = req.params.id
    HisTal.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/histal")
    })
})

router.get("/histal/edit/:id", (req, res) => {
    const id = req.params.id
    HisTal.findByPk(id).then(function (histal) {
        res.render("histalEdit", {
            histal: histal
        })
    })
})

router.post("/histal/update/:id", (req, res) => {
    const id = req.params.id
    const planta = req.body.planta
    const status = req.body.status
    HisTal.update(
        {
            planta: planta,
            status: status,
        },
        { where: { id: id } }
    ).then(() => {
        res.redirect("/histal")
    })
})

export default router;