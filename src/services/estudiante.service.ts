import { Estudiante } from '../entities/Estudiante.entity';
import { AppDataSource } from '../config/db';

//Repositorio
const estudianteRepository = AppDataSource.getRepository(Estudiante);

//Leer todas las carreras
export const srvGetEstudiantes = async() => {
    const estudiantes = await estudianteRepository.find({
        order: { nombreEstudiante: 'ASC'}
    });
    return estudiantes;
}

//NUEVO ESTUDIANTE
export const srvCreateEstudiante = async (pnombreEstudiante: string) => {

    const nuevoEstudiante = new Estudiante();
    nuevoEstudiante.nombreEstudiante = pnombreEstudiante;

    return await estudianteRepository.save(nuevoEstudiante);
}

export const srvGetEstudianteByID = async (pIdEstudiante: number) => {
    const estudiante = await estudianteRepository.findOne({
        where: { idEstudiante: pIdEstudiante}
    })
    return estudiante;
}

export const srvUpdateEstudiante = async (pIdEstudiante: number, pNombreEstudiante: string) => {

    //Buscar Estudiante
    const estudiante = await estudianteRepository.findOne({
        where: { idEstudiante: pIdEstudiante}
    });

    //VALIDACION
    if(!estudiante) return null;
    estudiante.nombreEstudiante = pNombreEstudiante;

    return await estudianteRepository.save(estudiante);
}

//ELIMINAR ESTUDIANTE
export const srvDeleteEstudiante = async (pIdEstudiante: number) => {

    //BUSCAR ESTUDIANTE
    const estudiante = await estudianteRepository.findOne({
        where: { idEstudiante: pIdEstudiante}
    });

    //VALIDACION
    if(!estudiante) return null;

    return await estudianteRepository.remove(estudiante);
}