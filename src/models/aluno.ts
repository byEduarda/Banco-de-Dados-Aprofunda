import { Schema, model, Types } from 'mongoose';

export interface IAluno {
  nome: string;
  email: string;
  curso: Types.ObjectId;
}

const alunoSchema = new Schema<IAluno>({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  curso: { type: Schema.Types.ObjectId, ref: 'Curso', required: true },
});

export const AlunoModel = model<IAluno>('Aluno', alunoSchema);
