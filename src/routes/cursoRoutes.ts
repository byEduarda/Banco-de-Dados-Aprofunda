import { Router } from 'express';
import { criarCurso, listarCursos } from '../controllers/cursoController';

const router = Router();

router.post('/cursos', criarCurso);
router.get('/cursos', listarCursos);

export default router;
