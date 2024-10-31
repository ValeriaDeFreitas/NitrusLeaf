import express from "express";
const router =  express.Router();
import Usuarios from "../models/Usuarios.js";
import bcrypt from "bcrypt";
import { where } from "sequelize";

// ROTA PRINCIPAL LOGIN
router.get("/login", (req, res) => {
    res.render("login");
});

//ROTA DE CADASTRO
router.get("/cadastroUsuarios", (req, res) =>{
    res.render("cadastroUsuarios");
})

//ROTA DE CRIAÇÃO DE USUARIOS 
router.post("/createUsuarios", (req,res)=>{
    const tipoPessoa = req.body.tipoPessoa;
    const cpf = req.body.cpf;
    const logradouro = req.body.logradouro;
    const numero = req.body.numero;
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;
    
    Usuarios.findOne({where:{email:email}}).then((usuarios)=>{
        if(usuarios == undefined){
            //AQUI É FEITO O CADASTRO E O HASH DE SENHA
            const salt =bcrypt.genSaltSync(10)
            const hash =bcrypt.hashSync(senha, salt)
            Usuarios.create({
                cpf:cpf,
                logradouro:logradouro,
                numero:numero,
                bairro:bairro,
                cidade:cidade                
            }).then(() => {
                res.redirect("/login");
            });
            //CASO O USUARIO JÁ ESTEJA CADASTRADO

        }else{
            res.send(`Usuário já cadastrado.<br>
                <a href="/login">faça o login!</a>`);
        }
    });

     Usuarios.create({
        tipoPessoa:tipoPessoa,
        cpf:cpf,
        logradouro:logradouro,
        numero:numero,
        bairro:bairro,
        cidade:cidade
     }).then(()=>{
        res,redirect("/login");
     })
})

//ROTA DE AUTENTICAÇÃO
router.post("/authenticate", (req, res) => {
    const tipoPessoa = req.body.tipoPessoa;
    const cpf = req.body.cpf;
    const logradouro = req.body.logradouro;
    const numero = req.body.numero;
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;
    Usuarios.findOne({
        where:{
        tipoPessoa:tipoPessoa,
        cpf:cpf,
        logradouro:logradouro,
        numero:numero,
        bairro:bairro,
        cidade:cidade

        },
    }).then(usuarios =>{
        if(usuarios != undefined){
            res.redirect("/");

        }else{
            res.send(`Usuário não cadastrado. <a href="/login">Tente novamente! `);
        }
    })    

})



export default router;


