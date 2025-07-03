import 'dotenv/config';
import express from 'express';
import mongoose, { Schema, model} from 'mongoose';

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL! as string)
.then(() => console.log('MongoDB connection'))
.catch(err => console.error('MongoDB connection error:', err))

interface IAluno {
    nome: string;
    email: string;
}

const alunoSchema = new Schema<IAluno>({
    nome:{type:String, required: true},
    email:{type:String, required: true, unique: true},
})

const alunomodel = model<IAluno>('alunoModel', alunoSchema)

app.post('/alunos', async( req, res) => {
    try {
        const novo = await alunomodel.create(req.body);
        res.status(201).json(novo);
    } catch (e) {
        res.status(400).json({ erro: 'Dados inválidos', detalhe: e});
    }
})

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Servior rodando na porta ${PORT}`))