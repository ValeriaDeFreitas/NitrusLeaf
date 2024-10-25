import express from 'express'
const router = express.Router()

import Talhoes from "../models/Talhoes.js"
import{where} from 'sequelize'


router.get("/talhoes", function(req,res){
    Cliente.findAll().then(talhoes => {
        res.render("talhoes", {
            talhoes: talhoes
        })

    })

})

router.post("/talhoes/new", (req, res) =>{

    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco
    Cliente.create({

        nome:nome,
        cpf:cpf,
        endereco : endereco
    }).then(() => {
        res.redirect("/talhoes")
    })
})

router.get("/talhoes/delete/:id?", (req, res) => {

const id = req.params.id

Cliente.destroy({

    where:{
        id : id
    }
}).then(() => {
    res.redirect("/talhoes/")
}).catch(error => {

    console.log(error)
})

})
//ROTA DE EDIÇÃO DE CLIENTE
router.get("/talhoes/edit/:id", (req, res) => {
   const id = req.params.id
    Cliente.findByPk(id).then((cliente)=> {
        res.render("clienteEdit",{
            cliente: cliente,
        });
    }).catch((error) => {
        console.log(error)
    })
});

//ROTA DE ALTERAÇÃO DE CLIENTE
router.post("/talhoes/update", (req , res) => {
    const id = req.body.id
    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco
    Cliente.update(
    {
        nome: nome,
        cpf: cpf,
        endereco: endereco
    },
    {where: {id : id}}
).then(() => {
    res.redirect("/talhoes")
}).catch((error) => {
    console.log(error)
})
})

export default router;