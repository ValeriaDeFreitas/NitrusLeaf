// ORM - Sequelize
import Sequelize from "sequelize";
//Configuração do Sequelize
import connection from "../config/sequelize-config.js";
//.define cria a tabela no banco
const Histal = connection.define('histal', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    planta: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    talhao: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
//Não força a criação da tabela caso já exista
Histal.sync({ force: false })
export default Histal;