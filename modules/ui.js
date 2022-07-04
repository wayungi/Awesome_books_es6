const displayAddNew = (valuesObj) => {
  const {
    addNew,
    list,
    contact,
    addNewBookPage,
    contactPage,
    listBooksPage,
  } = valuesObj;

  addNew.addEventListener('click', () => {
    // pages
    listBooksPage.classList.add('hide');
    contactPage.classList.add('hide');
    addNewBookPage.classList.remove('hide');

    // links
    contact.classList.remove('active');
    list.classList.remove('active');
    addNew.classList.add('active');
    return null;
  });
};

const dummy = () => null;

export {
  toggleViews,
  dummy,
};