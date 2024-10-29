import express from 'express'
const router = express.Router()

import Talhoes from "../models/Talhoes.js"
import{where} from 'sequelize'


router.get("/talhoes", function(req,res){
    Talhoes.findAll().then(talhoes => {
        res.render("talhoes", {
            talhoes: talhoes
        })

    })

})

router.post("/talhoes/new", (req, res) =>{

    const nomeTalhao = req.body.nomeTalhao
    const nomePe = req.body.nomePe
    Talhoes.create({
        nomeTalhao:nomeTalhao,
        nomePe: nomePe
    }).then(() => {
        res.redirect("/talhoes")
    })
})

router.get("/talhoes/delete/:id?", (req, res) => {

const id = req.params.id

Talhoes.destroy({

    where:{
        id : id
    }
}).then(() => {
    res.redirect("/talhoes/")
}).catch(error => {

    console.log(error)
})

})
//ROTA DE EDIÇÃO DE TALHOES
router.get("/talhoes/edit/:id", (req, res) => {
   const id = req.params.id
    Talhoes.findByPk(id).then((talhoes)=> {
        res.render("talhoesEdit",{
            talhoes: talhoes,
        });
    }).catch((error) => {
        console.log(error)
    })
});

//ROTA DE ALTERAÇÃO DE TALHOES
router.post("/talhoes/update", (req , res) => {
    const id = req.body.id
    const nomeTalhao = req.body.nomeTalhao
    const nomePe = req.body.nomePe
    Talhoes.update(
    {
        nomeTalhao: nomeTalhao,
        nomePe: nomePe
        
    },
    {where: {id : id}}
).then(() => {
    res.redirect("/talhoes")
}).catch((error) => {
    console.log(error)
})
})

export default router;