import { Request, Response } from "express";
import { srvCreateEstudiante, srvDeleteEstudiante, srvGetEstudianteByID, srvGetEstudiantes } from "../services/estudiante.service";

//Obtener todos los estudiantes
export const getEstudiantes = async (req: Request, res: Response) => {

    try{
        const estudiantes = await srvGetEstudiantes();

        res.status(200).json(estudiantes);
    } catch(error){
        console.log('Error al obtener la información de los estudiantes '+ error)
    }
}


//Obtener un estudiante por Id
export const getEstudiante = async(req: Request, res: Response) => {

    try{
        const {id} = req.params;
        
        const estudiante = await srvGetEstudianteByID(+id);

        if(!estudiante) res.status(404).json({message: 'No se encontró el estudiante'})
        
        res.status(200).json(estudiante);

    }catch(error){
        console.log('Error al obtener los datos del estudiante ' + error)
    }
}

//Crear un estudiante
export const createEstudiante = async(req: Request, res: Response) => {

    try{
        const { nombreEstudiante } = req.body;

        const estudiante = await srvCreateEstudiante (nombreEstudiante);

        res.status(201).json(estudiante);

    }catch(error){
        console.log('Error al crear el estudiante ' + error)
    }
}

//Actualizar un estudiante
export const updateEstudiante = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { nombreEstudiante } = req.body;

    try {

        const estudiante = await srvGetEstudianteByID (+id);

        if(!estudiante) res.status(404).json({ message: 'No se encontró el estudiante con ID ' + id});

        const estudianteUpdate = await srvCreateEstudiante(nombreEstudiante);

        res.status(200).json(estudianteUpdate);

    }catch(error){
        console.log('Error al actualizar el estudiante ' + error)
    }
}

//Eliminar un estudiante

export const deleteEstudiante = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
        const estudiante = await srvGetEstudianteByID(+id);

        if(!estudiante) res.status(404).json({ message: 'No se encontró el estudiante con ID '+ id});

        await srvDeleteEstudiante(+id);
        res.status(200).json({message: 'estudiante eliminado'})
    }   catch(error){
        console.log('Error al eliminar el estudiante ' + error)
    }

}