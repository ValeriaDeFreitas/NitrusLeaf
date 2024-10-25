// ORM - Sequelize
import Sequelize from "sequelize";
//Configuração do Sequelize
import connection from "../config/sequelize-config.js";
//.define cria a tabela no banco
const Fazenda = connection.define('fazenda', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomePropriedade: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cep: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    logradouro: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    numero: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    bairro: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    cidade: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
   
});
//Não força a criação da tabela caso já exista
Pedido.sync({ force: false })
export default Pedido;