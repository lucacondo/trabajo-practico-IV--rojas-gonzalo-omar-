import { hostname } from "node:os";
import { Sequelize } from "sequelize";

export const sequelize = new sequelize('movies','root','',{
    host:"localhost",
    dialect:"mysql",
});

export const startDB = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync({force:false});
        console.log('Conexion a la db lista');  
    } catch (error) {
        console.error('No se pudo conectar a la db',error);
    }
}