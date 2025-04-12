import { Estudiante } from '../entities/Estudiante.entity';
import { AppDataSource } from '../config/db';
import { Carrera } from '../entities/Carrera.entity';

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
export const srvCreateEstudiante = async (estudanteData:
    {
        nombreEstudiante: string;
        direccion: string;
        telefono: string;
        idCarrera: number;
        correoElectronico?: string;
    }
) => {
    //Modificando el código por mi cuenta para hacer las pruebas con postman
    const nuevoEstudiante = new Estudiante();

    //Mapear los campos
    nuevoEstudiante.nombreEstudiante = estudanteData.nombreEstudiante;
    nuevoEstudiante.direccion = estudanteData.direccion;
    nuevoEstudiante.correoElectronico = estudanteData.correoElectronico;
    nuevoEstudiante.telefono = estudanteData.telefono;

    nuevoEstudiante.carrera = {idCarrera: estudanteData.idCarrera}as Carrera;

    return await estudianteRepository.save(nuevoEstudiante);
}

/*export const srvCreateEstudiante = async (pnombreEstudiante: string) => {

    const nuevoEstudiante = new Estudiante();
    nuevoEstudiante.nombreEstudiante = pnombreEstudiante;

    return await estudianteRepository.save(nuevoEstudiante);
} */


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