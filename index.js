import { addBook, deleteBook, getBooks } from './modules/books.js';
import Book from './modules/book.js';

const form = document.getElementById('add_book_form');

form.addEventListener('submit', () => {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;

  if (title && author) {
    const book = Book(title, author);
    addBook(book);

    /*
      TODO: Add interface update method here
    */
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    return book;
  }
});