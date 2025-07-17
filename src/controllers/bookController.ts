import { Request, Response } from 'express';
import { Book } from '../models/Book';

export async function createBook(req: Request, res: Response) {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao salvar livro' });
  }
}
