import express from 'express';
import { connectToMongo } from '../database/mongoConnect';
import alunoRoutes from '../../routes/alunoRoutes';
import cursoRoutes from '../../routes/cursoRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('API de Alunos e Cursos');
});

app.use('/api/alunos', alunoRoutes);
app.use('/api/cursos', cursoRoutes);

export function startServer(): void {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
}
