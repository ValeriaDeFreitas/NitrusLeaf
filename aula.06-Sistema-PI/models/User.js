import sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const User = connection.define('users', {
    email:{
        type: sequelize.STRING,
        allowNull:false
    },
    password:{
        type: sequelize.STRING,
        allowNull:false
    }
})

User.sync({force:false});
export default User;
