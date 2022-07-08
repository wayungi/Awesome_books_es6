const getBooks = () => {
  if (localStorage.getItem('books')) {
    const books = JSON.parse(localStorage.getItem('books'));
    return books;
  }
  return [];
};

let books = getBooks();

const addBook = (book) => {
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  return book;
};

const deleteBook = (isbn) => {
  books = books.filter((book) => book.isbn !== isbn);
  localStorage.setItem('books', JSON.stringify(books));
  return books;
};

const getBookCount = () => books.length;

const createBtn = (isbn) => {
  const btn = document.createElement('button');
  btn.textContent = 'Remove';
  btn.setAttribute('id', isbn);
  btn.classList.add('delete_btn');

  btn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
    deleteBook(isbn);
  });
  return btn;
};

const uiAddBook = (book) => {
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book_item');

  const title = document.createElement('p');
  title.textContent = `"${book.title}"`;

  const author = document.createElement('p');
  author.textContent = book.author;

  const by = document.createElement('p');
  by.textContent = 'by';

  const bookGroup = document.createElement('div');
  bookGroup.classList.add('book_group');

  bookGroup.appendChild(title);
  bookGroup.appendChild(by);
  bookGroup.appendChild(author);

  const delBtn = createBtn(book.isbn);

  bookDiv.appendChild(bookGroup);
  bookDiv.appendChild(delBtn);
  return bookDiv;
};

export {
  addBook,
  getBooks,
  getBookCount,
  uiAddBook,
};