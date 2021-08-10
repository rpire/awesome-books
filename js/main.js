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
      button[i].setAttribute('onclick', `bookShelf.removeBook(${i})`);
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

  removeBook(num) {
    this.books.splice(num, 1);
    const bookList = JSON.stringify(this.books);
    localStorage.setItem('Books', bookList);
    window.location.reload();
  }
}

const bookShelf = new BookShelf();
window.onload = bookShelf.reload();

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const submitButton = document.querySelector('#button');
submitButton.onclick = () => { bookShelf.addBook(title.value, author.value); };