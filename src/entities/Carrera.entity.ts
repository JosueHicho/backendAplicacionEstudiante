import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Estudiante } from "./Estudiante.entity";

@Entity({ name: 'carrera'})


export class Carrera {

    //Definir todos los campos
    @PrimaryGeneratedColumn({ name: 'id_carrera'}) 
    idCarrera: number;

    @Column({name: 'nombre_carrera', nullable: false})
    nombreCarrera: string;

    //Relación con Estudiante
    @OneToMany(()=> Estudiante, estudiante => estudiante.carrera)
    estudiantes: Estudiante[];

}