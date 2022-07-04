const toggleViews = (valuesObj) => {
  const {
    ClickedLink,
    linkHolder1,
    linkHolder2,
    activePage,
    pageHolder1,
    pageHolder2,
  } = valuesObj;
  ClickedLink.addEventListener('click', () => {
    // pages
    pageHolder1.classList.add('hide');
    pageHolder2.classList.add('hide');
    activePage.classList.remove('hide');

    // links
    linkHolder1.classList.remove('active');
    linkHolder2.classList.remove('active');
    ClickedLink.classList.add('active');
    return null;
  });
};

const dummy = () => null;

export {
  toggleViews,
  dummy,
};