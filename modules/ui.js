// const createBtn = (isbn) => {
//   const btn = document.createElement('button');
//   btn.textContent = 'Remove';
//   btn.setAttribute('id', isbn);
//   btn.classList.add('delete_btn');

//   btn.addEventListener('click', (e) => {
//     e.target.parentElement.remove();
//   });
//   return btn;
// };

// const uiAddBook = (book) => {
//   const bookDiv = document.createElement('div');
//   bookDiv.classList.add('book_item');

//   const title = document.createElement('p');
//   title.textContent = `"${book.title}"`;

//   const author = document.createElement('p');
//   author.textContent = book.author;

//   const by = document.createElement('p');
//   by.textContent = 'by';

//   const bookGroup = document.createElement('div');
//   bookGroup.classList.add('book_group');

//   bookGroup.appendChild(title);
//   bookGroup.appendChild(by);
//   bookGroup.appendChild(author);

//   const delBtn = createBtn(book.isbn);

//   bookDiv.appendChild(bookGroup);
//   bookDiv.appendChild(delBtn);
//   return bookDiv;
// };

export {
  uiAddBook,
  createBtn,
};