import sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const User = connection.define('users', {
    nome:{
        type: sequelize.STRING,
        allowNull:false
    },
    telefone:{
        type: sequelize.INTEGER,
        allowNull:false
    },
    email:{
        type: sequelize.STRING,
        allowNull:false
    },
    senha:{
        type: sequelize.STRING,
        allowNull:false
    },
    sobrenome:{
        type: sequelize.STRING,
        allowNull:false
    },
    celular:{
        type: sequelize.INTEGER,
        allowNull:false
    },
    confirmarSenha:{
        type: sequelize.STRING,
        allowNull:false
    }
})

User.sync({force:false});
export default User;
