import { Router } from 'express';
import { criarAluno, listarAlunos } from '../controllers/alunoController';

const router = Router();

router.post('/alunos', criarAluno);
router.get('/alunos', listarAlunos);

export default router;
