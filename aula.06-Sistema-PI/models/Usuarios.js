import sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Usuarios = connection.define('usuarios', {
    tipoPessoa:{
        type: sequelize.STRING,
        allowNull:false
    },
    cpf:{
        type: sequelize.STRING,
        allowNull:false
    },
    logradouro:{
        type: sequelize.STRING,
        allowNull:false
    },
    numero:{
        type: sequelize.STRING,
        allowNull:false
    },
    bairro:{
        type: sequelize.STRING,
        allowNull:false
    },
    cidade:{
        type: sequelize.STRING,
        allowNull:false
    },
    

})

Usuarios.sync({force:false});
export default Usuarios;
