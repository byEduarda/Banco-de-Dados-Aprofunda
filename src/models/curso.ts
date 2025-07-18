import { Schema, model } from 'mongoose';

export interface ICurso {
  nome: string;
  codigo: string;
}

const cursoSchema = new Schema<ICurso>({
  nome: { type: String, required: true },
  codigo: { type: String, required: true, unique: true },
});

export const CursoModel = model<ICurso>('Curso', cursoSchema);
