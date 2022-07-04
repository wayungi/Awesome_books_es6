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

export {
  addBook,
  deleteBook,
  getBooks,
  getBookCount,
};