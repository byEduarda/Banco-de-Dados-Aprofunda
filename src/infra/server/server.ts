import express from 'express';
import { connectToMongo } from '../database/mongoConnect';

const app = express();
app.use(express.json());

connectToMongo(); 

app.get('/', (req, res) => {
  res.send('API está rodando!');
});

export default app;
