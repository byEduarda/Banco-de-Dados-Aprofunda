import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: String,
  content: String,
  status: String,
  author: String,
  created_at: { type: Date, default: Date.now }
});

export const Book = mongoose.model('Book', bookSchema);
