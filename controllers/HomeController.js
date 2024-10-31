import express from 'express';
import Home from "../models/Home.js"
const router = express.Router()

// ROTA PEDIDOS
router.get("/home", function (req, res) {
    Home.findAll().then(home => {
        res.render("home", { home })
    })

})

router.post("/home/new", function (req, res) {
    try {
        const historicoDados = req.body;
        res.status(201).send("Cadastrado")
    } catch (e) {
        console.error("erro", e);
        res.status(400);
    }
})

export default router;