import { Request, Response } from 'express';
import { CursoModel } from '../models/curso';

export async function criarCurso(req: Request, res: Response) {
  try {
    const novoCurso = await CursoModel.create(req.body);
    res.status(201).json(novoCurso);
  } catch (e) {
    res.status(400).json({ erro: 'Erro ao criar curso', detalhe: e });
  }
}

export async function listarCursos(_req: Request, res: Response) {
  const cursos = await CursoModel.find();
  res.json(cursos);
}
