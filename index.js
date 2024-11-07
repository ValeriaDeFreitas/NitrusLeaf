// Importando o Express com ES6 Modules
import express from 'express';
// Iniciando o Express na variável app
const app = express();
//Importando o sequelize (com os dados da execução)
import connection from './config/sequelize-config.js';

// Importando os Controllers (onde estão as rotas) 
import HistoricoController from "./controllers/HistoricoController.js"
import HisTalController from "./controllers/HisTalController.js"
import TalhoesController from "./controllers/TalhoesController.js"
import UsersController from "./controllers/UsersController.js"
import UsuariosController from "./controllers/UsuariosController.js"
import HomeController from "./controllers/HomeController.js"


app.use(express.urlencoded({extended: false}))

//Realizando a conexão com o banco de dados
connection.authenticate().then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!")
}).catch((error) => {
    console.log(error)
})

//Criando o banco de dados se ele não existir
connection.query(`CREATE DATABASE IF NOT EXISTS mexerica;`).then(() => {
    console.log("O banco de dados está criado.");
}).catch((error) => {
    console.log(error)
});

// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs');
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'));

// Definindo o uso das rotas dos Controllers
app.use("/", HisTalController);
app.use("/", HistoricoController);
app.use("/", TalhoesController);
app.use("/", UsersController);
app.use("/", UsuariosController);
app.use("/", HomeController);

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})

// INICIA O SERVIDOR NA PORTA 8080
const port = "8080";
app.listen(port, (erro) => {
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port} `);
    }
})