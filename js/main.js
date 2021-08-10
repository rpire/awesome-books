/* eslint-disable no-unused-vars */

class BookShelf {
  constructor() {
    this.books = [
      {
        title: 'Lorem ipsum dolor',
        author: 'Lorem ipsum',
      },
      {
        title: 'Another book',
        author: 'Another Author',
      },
    ];
  }
  genHTML() {
    const htmlString = `
      <article class="book-card">
          <p class="book-title"></p>
          <p class="book-author"></p>
          <button class="book-btn">Remove</button>
          <hr>
      </article>
      `;
    for (let i = 0; i < this.books.length; i += 1) {
      document.getElementById('book-shelf').innerHTML += htmlString;
      const title = document.querySelectorAll('.book-title');
      const author = document.querySelectorAll('.book-author');
      const button = document.querySelectorAll('.book-btn');
      title[i].innerHTML = this.books[i].title;
      author[i].innerHTML = this.books[i].author;
      button[i].setAttribute('onclick', `removeBook(${i})`);
    }
  }
  addBook(title, author) {
    const bookData = {
      title,
      author,
    };
    this.books.push(bookData);
    const bookList = JSON.stringify(this.books);
    localStorage.setItem('Books', bookList);
    console.log('hello world')
  }
  reload() {
    if (localStorage.getItem('Books')) {
      const oldStorage = localStorage.getItem('Books');
      const newStorage = JSON.parse(oldStorage);
      this.books = newStorage;
      this.genHTML();
    } else {
      this.genHTML();
    }
  }
}

const bookShelf = new BookShelf;
window.onload = bookShelf.reload();

// let books = [
//   {
//     title: 'Lorem ipsum dolor',
//     author: 'Lorem ipsum',
//   },
//   {
//     title: 'Another book',
//     author: 'Another Author',
//   },
// ];

// const genHTML = () => {
//   const htmlString = `
//     <article class="book-card">
//         <p class="book-title"></p>
//         <p class="book-author"></p>
//         <button class="book-btn">Remove</button>
//         <hr>
//     </article>
//     `;
//   for (let i = 0; i < bookShelf.books.length; i += 1) {
//     document.getElementById('book-shelf').innerHTML += htmlString;
//     const title = document.querySelectorAll('.book-title');
//     const author = document.querySelectorAll('.book-author');
//     const button = document.querySelectorAll('.book-btn');
//     title[i].innerHTML = bookShelf.books[i].title;
//     author[i].innerHTML = bookShelf.books[i].author;
//     button[i].setAttribute('onclick', `removeBook(${i})`);
//   }
// };

// window.onload = () => {
//   if (localStorage.getItem('Books')) {
//     const oldStorage = localStorage.getItem('Books');
//     const newStorage = JSON.parse(oldStorage);
//     bookShelf.books = newStorage;
//     genHTML();
//   } else {
//     genHTML();
//   }
// };

// const addBook = () => {
//   const title = document.querySelector('#title').value;
//   const author = document.querySelector('#author').value;

//   const bookData = {
//     title,
//     author,
//   };

//   books.push(bookData);

//   const bookList = JSON.stringify(books);
//   localStorage.setItem('Books', bookList);
// };

const removeBook = (num) => {
  books.splice(num, 1);
  const bookList = JSON.stringify(books);
  localStorage.setItem('Books', bookList);
  window.location.reload();
};

const title = document.querySelector('#title');
const author = document.querySelector('#author');
console.log(title, author);
const submitButton = document.querySelector('#button');
submitButton.addEventListener('click', bookShelf.addBook(title, author));