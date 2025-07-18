import express from 'express';
import { connectMongoDB } from './infra/database/mongoConnect';
import alunoRoutes from './routes/alunoRoutes';
import cursoRoutes from './routes/cursoRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de Alunos e Cursos')});

app.use(alunoRoutes);
app.use(cursoRoutes);

connectMongoDB();

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
