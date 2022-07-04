import { addBook, deleteBook, getBooks } from './modules/books.js';
import Book from './modules/book.js';

const form = document.getElementById('add_book_form');

form.addEventListener('submit', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title && author) {
    const book = Book(title, author);
    addBook(book);
    /*
      TODO: Add interface update method here
    */
    return book;
  }
});