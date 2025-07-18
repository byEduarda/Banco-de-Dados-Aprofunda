import { Router } from 'express';
import { criarCurso, listarCursos } from '../controllers/cursoController';

const router = Router();

router.post('/', criarCurso);
router.get('/', listarCursos);

export default router;
