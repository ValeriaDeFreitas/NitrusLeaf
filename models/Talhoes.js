// ORM - Sequelize
import Sequelize from "sequelize";
//Configuração do Sequelize
import connection from "../config/sequelize-config.js";
//.define cria a tabela no banco
const Talhoes = connection.define('talhoes',{
id: {
   type: Sequelize.INTEGER,
   primaryKey: true,
   autoIncrement: true
},
nomeTalhao:{
    type:Sequelize.STRING,
    allowNull: false,
},
nomePe:{
    type:Sequelize.STRING,
    allowNull: false,
}

});
//Não força a criação da tabela caso já exista
Talhoes.sync({force: false})
export default Talhoes;