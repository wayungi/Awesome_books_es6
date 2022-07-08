import { DateTime } from './modules/luxon.js';
import {
  addBook,
  getBookCount,
  getBooks,
  uiAddBook,
} from './modules/books.js';
import Book from './modules/book.js';

const form = document.getElementById('add_book_form');
const timeBar = document.getElementById('time_bar');

const listLink = document.getElementById('list_id');
const addNewLink = document.getElementById('add_new_id');
const contactLink = document.getElementById('contact_id');

const addNewBookPage = document.getElementById('add_new_book');
const contactPage = document.getElementById('contact_us');
const listBooksPage = document.getElementById('list_books');

setInterval(() => {
  const dt = DateTime.now();
  timeBar.textContent = dt.toLocaleString(DateTime.DATETIME_MED);
}, 1000);

contactLink.addEventListener('click', () => {
  listLink.classList.remove('active');
  addNewLink.classList.remove('active');
  contactLink.classList.add('active');

  listBooksPage.classList.add('hide');
  contactPage.classList.remove('hide');
  addNewBookPage.classList.add('hide');

  return null;
});

addNewLink.addEventListener('click', () => {
  listLink.classList.remove('active');
  contactLink.classList.remove('active');
  addNewLink.classList.add('active');

  listBooksPage.classList.add('hide');
  contactPage.classList.add('hide');
  addNewBookPage.classList.remove('hide');

  return null;
});

listLink.addEventListener('click', () => {
  listLink.classList.add('active');
  contactLink.classList.remove('active');
  addNewLink.classList.remove('active');

  listBooksPage.classList.remove('hide');
  contactPage.classList.add('hide');
  addNewBookPage.classList.add('hide');
  return null;
});

form.addEventListener('submit', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title && author) {
    const book = Book(title, author);
    addBook(book);
    listBooksPage.appendChild(uiAddBook(book));
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    return book;
  }
  return null;
});

document.addEventListener('DOMContentLoaded', () => {
  if (getBookCount()) {
    getBooks().forEach((book) => {
      listBooksPage.appendChild(uiAddBook(book));
    });
  }
  return null;
});