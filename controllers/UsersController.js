import express from "express";
const router =  express.Router();
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { where } from "sequelize";

router.get("/login", (req, res) => {
    res.render("login");
});

//ROTA DE CADASTRO

router.get("/cadastro", (req, res) =>{
    res.render("cadastro");
})
//ROTA DE CRIAÇÃO DE USUARIOS 
router.post("/createUser", (req,res)=>{
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const email = req.body.email;
    const senha = req.body.senha;
    const sobrenome = req.body.sobrenome;
    const celular = req.body.celular;
    const confirmarSenha = req.body.confirmarSenha;
    User.findOne({where:{email:email}}).then((user)=>{
        if(user == undefined){
            //AQUI É FEITO O CADASTRO E O HASH DE SENHA
            const salt =bcrypt.genSaltSync(10)
            const hash =bcrypt.hashSync(senha, salt)
            User.create({
                nome:nome,
                telefone:telefone,
                email:email,
                senha:hash,
                sobrenome:sobrenome,
                celular:celular,
                confirmarSenha:confirmarSenha
            }).then(() => {
                res.redirect("/login");
            });
            //CASO O USUARIO JÁ ESTEJA CADASTRADO

        }else{
            res.send(`Usuário já cadastrado.<br>
                <a href="/login">faça o login!</a>`);
        }
    });

     User.create({
        nome:nome,
        telefone:telefone,
        email:email,
        senha:hash,
        sobrenome:sobrenome,
        celular:celular,
        confirmarSenha:confirmarSenha
     }).then(()=>{
        res,redirect("/login");
     })
})

//ROTA DE AUTENTICAÇÃO
router.post("/authenticate", (req, res) => {
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const email = req.body.email;
    const senha = req.body.senha;
    const sobrenome = req.body.sobrenome;
    const celular = req.body.celular;
    const confirmarSenha = req.body.confirmarSenha;
    User.findOne({
        where:{
        nome:nome,
        telefone:telefone,
        email:email,
        senha:hash,
        sobrenome:sobrenome,
        celular:celular,
        confirmarSenha:confirmarSenha
        },
    }).then(user =>{
        if(user != undefined){
            res.redirect("/");

        }else{
            res.send(`Usuário não cadastrado. <a href="/login">Tente novamente! `);
        }
    })    

})



export default router;


