const book = (title, author, isbn = Date.now().toString()) => ({
  title,
  author,
  isbn,
});

export default book;