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
     const email = req.body.email;
     const password = req.body.password;
    User.findOne({where:{email:email}}).then((user)=>{
        if(user == undefined){
            //AQUI É FEITO O CADASTRO E O HASH DE SENHA
            const salt =bcrypt.genSaltSync(10)
            const hash =bcrypt.hashSync(password, salt)
            User.create({
                email:email,
                password:hash,
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
        email:email,
        password:password,
     }).then(()=>{
        res,redirect("/login");
     })
})

//ROTA DE AUTENTICAÇÃO
router.post("/authenticate", (req, res) => {
    const email = req.body.email;
    const password = req.bodi.password;

    User.findOne({
        where:{
            email:email
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


