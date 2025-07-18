import { Router } from 'express';
import { criarAluno, listarAlunos } from '../controllers/alunoController';

const router = Router();

router.post('/', criarAluno);
router.get('/', listarAlunos);

export default router;
