const displayAddNew = (valuesObj) => {
  const {
    addNew,
    list,
    contact,
    addNewBookPage,
    contactPage,
    listBooksPage,
  } = valuesObj;

  // pages
  listBooksPage.classList.add('hide');
  contactPage.classList.add('hide');
  addNewBookPage.classList.remove('hide');

  // links
  contact.classList.remove('active');
  list.classList.remove('active');
  addNew.classList.add('active');
  return null;
};

const displayList = (valuesObj) => {
  const {
    list,
    addNew,
    contact,
    listBooksPage,
    contactPage,
    addNewBookPage,
  } = valuesObj;

  // pages
  addNewBookPage.classList.add('hide');
  contactPage.classList.add('hide');
  listBooksPage.classList.remove('hide');

  // links
  list.classList.remove('active');
  contact.classList.remove('active');
  addNew.classList.add('active');
  return null;
};

export {
  displayAddNew,
  displayList,
};