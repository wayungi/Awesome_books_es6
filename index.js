import { addBook, deleteBook, getBooks } from './modules/books.js';
import Book from './modules/book.js';

const form = document.getElementById('add_book_form');

const list = document.getElementById('list_id');
const addNew = document.getElementById('add_new_id');
const contact = document.getElementById('contact_id');

const addNewBookPage = document.getElementById('add_new_book');
const contactPage = document.getElementById('contact_us');
const listBooksPage = document.getElementById('list_books');

addNew.addEventListener('click', () => {
  listBooksPage.classList.add('hide');
  contactPage.classList.add('hide');
  addNewBookPage.classList.remove('hide');

  list.classList.remove('active');
  contact.classList.remove('active');
  addNew.classList.add('active');

  return null;
});

form.addEventListener('submit', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

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

  return null;
});