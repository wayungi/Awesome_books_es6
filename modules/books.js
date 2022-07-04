// [
//   {
//     title: 'Java 4',
//     author: 'Agaba',
//     isbn: '65476473',
//   },
//   {
//     title: 'Python 4',
//     author: 'Bruce W',
//     isbn: '990880988',
//   },
//   {
//     title: 'JavaScript',
//     author: 'Francis',
//     isbn: '3453553565',
//   },
// ];

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
  localStorage.setItem('books', JSON.stringigy(books));
  return books;
};

export {
  addBook,
  deleteBook,
  getBooks,
};