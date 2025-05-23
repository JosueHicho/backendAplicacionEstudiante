import 'reflect-metadata'
import { DataSource } from 'typeorm'
import dotenv from 'dotenv'
import { error } from 'console';
import { Carrera } from '../entities/Carrera.entity';
import { Estudiante } from '../entities/Estudiante.entity';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [
       Carrera, Estudiante
    ]//
    // 'src/entities/**/*.ts'
    // 
    // ,
    //ssl: {
    //    rejectUnauthorized: false;
    //}
});

export const conectDB = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Conectado a la base de datos');
        console.log("Entidades registradas:", AppDataSource.entityMetadatas.map(e => e.name));
    }catch(error){
        console.log('Error al conectarse a la base de datos', error);
    }
}