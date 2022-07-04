let books = [
  {
    title: 'Java 4',
    author: 'Agaba',
    isbn: '65476473',
  },
  {
    title: 'Python 4',
    author: 'Bruce W',
    isbn: '990880988',
  },
  {
    title: 'JavaScript',
    author: 'Francis',
    isbn: '3453553565',
  },
];

const addBook = (book) => {
  books.push(book);
  localStorage.setItem('books', books);
  return book;
};

const deleteBook = (isbn) => {
  books = books.filter((book) => book.isbn !== isbn);
  localStorage.setItem('books', books);
  return books;
};


  /*
    * test code
  */
const book = {
  title: 'test book',
  author: 'Anniset',
  isbn: Date.now().toString(),
};
console.log(books);
addBook(book);
console.log(books);
const bk1 = deleteBook('65476473');
const bk2 = deleteBook('3453553565');
console.log(books);