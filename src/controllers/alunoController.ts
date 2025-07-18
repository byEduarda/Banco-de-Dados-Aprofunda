import { Request, Response } from 'express';
import { AlunoModel } from '../models/aluno';
import { CursoModel } from '../models/curso';

export async function criarAluno(req: Request, res: Response) {
  try {
    const { nome, email, curso } = req.body;

    const cursoExistente = await CursoModel.findById(curso);
    if (!cursoExistente) {
      return res.status(400).json({ erro: 'Curso não encontrado' });
    }

    const novoAluno = await AlunoModel.create({ nome, email, curso });
    res.status(201).json(novoAluno);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao criar aluno', detalhe: error });
  }
}

export async function listarAlunos(_req: Request, res: Response) {
  const alunos = await AlunoModel.find().populate('curso');
  res.json(alunos);
}
