/* eslint-disable no-undef */
const setTimeDate = () => {
  const { DateTime } = luxon;
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  document.getElementById('date').innerHTML = now;
};

setTimeDate();

const list = document.getElementById('list');
const addNew = document.getElementById('add-new');
const contact = document.getElementById('contact');
let visibility = 'list';
if (localStorage.getItem('visibility')) {
  visibility = localStorage.getItem('visibility');
}

window.onload = () => {
  switch (visibility) {
    case 'list':
      toggleList();
      break;
    case 'add-new':
      toggleAddNew();
      break;
    case 'contact':
      toggleContact();
      break;
    default:
      toggleList();
  }
};

toggleList = () => {
  if (list.classList.contains('invisible')) {
    list.classList.toggle('invisible');
    addNew.classList.add('invisible');
    contact.classList.add('invisible');
  }
  visibility = 'list';
  localStorage.setItem('visibility', visibility);
};

toggleAddNew = () => {
  if (addNew.classList.contains('invisible')) {
    addNew.classList.toggle('invisible');
    list.classList.add('invisible');
    contact.classList.add('invisible');
  }
  visibility = 'add-new';
  localStorage.setItem('visibility', visibility);
};

toggleContact = () => {
  if (contact.classList.contains('invisible')) {
    contact.classList.toggle('invisible');
    list.classList.add('invisible');
    addNew.classList.add('invisible');
  }
  visibility = 'contact';
  localStorage.setItem('visibility', visibility);
};

const listLink = document.getElementById('list-btn');
const AddNewLink = document.getElementById('add-new-btn');
const contactLink = document.getElementById('contact-btn');
listLink.onclick = () => { toggleList(); };
AddNewLink.onclick = () => { toggleAddNew(); };
contactLink.onclick = () => { toggleContact(); };