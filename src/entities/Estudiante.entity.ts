import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Carrera } from './Carrera.entity';

@Entity({name: 'estudiante'})

export class Estudiante {

    //CAMPOS PARA LOS DATOS ALMACENADOS
    @PrimaryGeneratedColumn({name: 'id_estudiante'})
    idEstudiante: number;

    @Column({name: 'nombre_estudiante', nullable: false})
    nombreEstudiante: string;

    @Column({name: 'direccion', nullable: false})
    direccion: string;

    @Column({name: 'correo_electronico', nullable: true})
    correoElectronico?: string;

    @Column({name: 'telefono', nullable: false, length: 12})
    telefono: string;

    @ManyToOne(()=> Carrera, carrera => carrera.estudiantes)
    
    @JoinColumn({name: 'id_carrera'})
    carrera: Carrera;

}