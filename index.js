import express from 'express';
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import connection from './config/sequelize-config.js'; // Conexão com o banco de dados
import HistoricoController from './controllers/HistoricoController.js';
import HisTalController from './controllers/HisTalController.js';
import TalhoesController from './controllers/TalhoesController.js';
import UsersController from './controllers/UsersController.js';
import UsuariosController from './controllers/UsuariosController.js';
import HomeController from './controllers/HomeController.js';

// Usando o __dirname em ES6 Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Iniciando o Express
const app = express();

// Serve arquivos estáticos da pasta 'public'
app.use(express.static('public'));


// Middleware para processar dados de formulários (URL-encoded)
app.use(express.urlencoded({ extended: false }));

// Serve os arquivos estáticos (HTML, CSS, JS) da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Realizando a conexão com o banco de dados
connection.authenticate().then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
    // Criar banco de dados, caso não exista
    connection.query(`CREATE DATABASE IF NOT EXISTS mexerica;`)
        .then(() => console.log("O banco de dados está criado."))
        .catch((error) => console.log("Erro ao criar o banco de dados:", error));
}).catch((error) => {
    console.log("Erro na conexão com o banco de dados:", error);
});

// Define o EJS como renderizador de páginas
app.set('view engine', 'ejs');

// Definindo as rotas
app.use("/", HisTalController);
app.use("/", HistoricoController);
app.use("/", TalhoesController);
app.use("/", UsersController);
app.use("/", UsuariosController);
app.use("/", HomeController);

// Configuração do Multer para armazenar os arquivos
const upload = multer({ dest: "public/uploads/" });

// Rota de upload de arquivo
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'Nenhum arquivo enviado.' });
    }

    // Se o upload for bem-sucedido, retorne uma resposta de sucesso
    res.json({ success: true, message: 'Upload realizado com sucesso!' });
});

// Rota principal
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/drone", (req, res) => {
    res.render("drone");
});

app.get("/scanner", (req, res) => {
    res.render("scanner", { img: "http://localhost:8080/uploads/mexerica.png" });
});

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (erro) => {
    if (erro) {
        console.log("Ocorreu um erro!");
    } else {
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
});
