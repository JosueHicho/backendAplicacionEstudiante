import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { conectDB } from './config/db';
import estudanteRouter from './routers/estudiante.routes';
import carreraRouter from './routers/carrera.routes';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

conectDB();


app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hola desde el servidor Express')
})

app.use('/apiUni/estudiantes', estudanteRouter);
app.use('/apiUni/carreras', carreraRouter);


app.listen(PORT, () => {
    console.log('Hola desde el servidor Express, Actualizado')
})

