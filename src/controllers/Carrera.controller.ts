import { Request, Response } from "express";
import { error } from 'console';
import { srvCreateCarrera, srvDeleteCarrera, srvGetCarreraByID, srvGetCarreras } from "../services/carrera.service";
import { srvGetEstudianteByID } from "../services/estudiante.service";


//OBTENER TODAS LAS CARRERAS
export const getCarreras  = async (req: Request, res: Response) => {
    
    try{
        const carreras = await srvGetCarreras();

        res.status(200).json(carreras)
    } catch (error) {
        console.log('Error al obtener las carreras' + error)
    }
}

//OBTENER UNA CARRERA POR ID
export const getCarrera = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;

    const carrera = await srvGetCarreraByID(+id);

    if(!carrera) res.status(404).json({message: 'No se encontro la carrera con ID' + id});

    res.status(200).json(carrera);

    } catch (error){

        console.log('Error al obtener la carrera' + error);
    }
        
}

//CREAR UNA CARRERA
export const createCarrera = async (req: Request, res: Response) => {

    try{

        const { nombreCarrera } = req.body;

        const carrera = await srvCreateCarrera (nombreCarrera);

        res.status(201).json(carrera);

    } catch (error) {
        console.log('Error al crear la carrera' + error)
    }

}

 //Actualizar una carrera
 export const updateCarrera = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { nombreCarrera } = req.body;

    try {
        const carrera = await srvGetCarreraByID(+id);

        if(!carrera) res.status(404).json({ message: 'No se encontro la carrera con ID ' + id});

        const carreraUpdate = await srvCreateCarrera(nombreCarrera);

        res.status(200).json(carreraUpdate);

    } catch(error){
        console.log('Error al actualizar la carrera ' + error)
    }

 }

 //Eliminar una carrera

 export const deleteCarrera = async (req: Request, res: Response) => {

    const {id} = req.params;

    try {

        const carrera = await srvGetCarreraByID(+id);

        if(!carrera) res.status(404).json({message: 'No se encontro la carrera con ID ' + id});

        //Eliminar carrera
        await srvDeleteCarrera(+id)

        res.status(200).json({message: 'carrera eliminada'})
        
    } catch (error){
        console.log("Error al eliminar la carrera " + error)
    }


 }