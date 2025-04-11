import { Router } from "express";
import { createEstudiante, deleteEstudiante, getEstudiante, getEstudiantes, updateEstudiante } from '../controllers/Estudiante.controller';

const router = Router();

router.get('/', getEstudiantes);
router.get('/:id', getEstudiante);
router.post('/', createEstudiante);
router.put('/:id', updateEstudiante);
router.delete('/:id', deleteEstudiante);

export default router;