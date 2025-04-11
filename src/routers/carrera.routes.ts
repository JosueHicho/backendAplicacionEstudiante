import { Router } from "express";

import { getCarrera, getCarreras, updateCarrera, createCarrera, deleteCarrera } from "../controllers/Carrera.controller";

const router = Router();

router.get('/', getCarreras);
router.get('/:id', getCarrera);
router.post('/', createCarrera);
router.put('/:id', updateCarrera);
router.delete('/:id', deleteCarrera);

export default router;