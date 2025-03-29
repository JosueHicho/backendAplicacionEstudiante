import { Carrera } from '../entities/Carrera.entity';
import { AppDataSource } from '../config/db';

//Crear el repositorio
const carreraRepository = AppDataSource.getRepository(Carrera);

//C = Create, R = Read, U = Update, D = Delete

//Leer todas las carreras

export const srvGetCarreras = async() => {

    const carreras = await carreraRepository.find({

        order:{ nombreCarrera: 'ASC'}
    });
    return carreras;
}

//Crear una nueva carrera
export const srvCreateCarrera = async (pnombreCarrera: string) => {
    const nuevaCarrera = new Carrera();

    nuevaCarrera.nombreCarrera = pnombreCarrera;

    return await carreraRepository.save(nuevaCarrera);
}

export const srvGetCarreraByID = async (pIdCarrera: number) => {

    const carrera = await carreraRepository.findOne({
        where: { idCarrera: pIdCarrera}
    })

    return carrera;
}


export const srvUpdateCarrera = async (pIdCarrera: number, pNombreCarrera: string) => {
    
    //Buscar la carrera
    const carrera = await carreraRepository.findOne({
        where: { idCarrera: pIdCarrera}
    });

    //Validación 
    if(!carrera) return null;

    carrera.nombreCarrera = pNombreCarrera;

    return await carreraRepository.save(carrera);
}

//Eliminar carrera
export const srvDeleteCarrera = async (pIdCarrera: number) => {

    //
    //Buscar la carrera
    const carrera = await carreraRepository.findOne({
        where: { idCarrera: pIdCarrera}
    });

    //Validación 
    if(!carrera) return null;

    return await carreraRepository.remove(carrera);
}