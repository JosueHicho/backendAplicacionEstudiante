import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

Entity({name: 'estudiante'})

export class Estudiante {

    //CAMPOS PARA LOS DATOS ALMACENADOS
    @PrimaryGeneratedColumn({name: 'id_estudiante'})

    idEstudiante: number;

    @Column({name: 'nombre_estudiante', nullable: false})
    nombreEstudiante: String;

}