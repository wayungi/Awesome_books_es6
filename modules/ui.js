const createBtn = (isbn) => {
  const btn = document.createElement('button');
  btn.value = 'Remove';
  btn.setAttribute('id', isbn);

  btn.addEventListener('click', (e) => {
    console.log(e.target.parent);
    e.target.parent.remove();
  });
  return btn;
};

const uiAddBooks = (book) => {
  const bookDiv = document.createElement('div');

  const title = document.createElement('p');
  title.textContent = book.title;

  const author = document.createElement('p');
  author.textContent = book.author;

  const delBtn = createBtn(book.isbn);
  bookDiv.appendChild(delBtn);

  bookDiv.appendChild(title);
  bookDiv.appendChild(author);
  return bookDiv;
};

export {
  uiAddBooks,
};