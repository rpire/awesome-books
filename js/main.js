let books = [
    {
        title: 'Lorem ipsum dolor',
        author: 'Lorem ipsum',
    },
    {
        title: 'Another book',
        author: 'Another Author',
    },
];

function genHTML() {
    const htmlString = `
    <article class="book-card">
        <p class="book-title">Lorem ipsum dolor sit amet.</p>
        <p class="book-author">Lorem, ipsum.</p>
        <button class="book-btn">Remove</button>
        <hr>
    </article>
    `
    for (let i = 0; i < books.length; i += 1) {
        document.getElementById('book-shelf').innerHTML += htmlString;
        const title = document.querySelectorAll('.book-title');
        const author = document.querySelectorAll('.book-author');
        const button = document.querySelectorAll('.book-btn');
        title[i].innerHTML = books[i].title;
        author[i].innerHTML = books[i].author;
        button[i].setAttribute('onclick', `removeBook(${i})`);
    }
}

window.onload = () => {
    if (localStorage.getItem('Books')) {
        const oldStorage = localStorage.getItem('Books');
        const newStorage = JSON.parse(oldStorage);
        books = newStorage;
        genHTML();
    } else {
        genHTML();
    }
}

function addBook() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;

    const bookData = {
        title: title,
        author: author,
    };

    books.push(bookData);

    let bookList = JSON.stringify(books);
    localStorage.setItem('Books', bookList);
}

function removeBook(num) {
    books.splice(num, 1)
    let bookList = JSON.stringify(books);
    localStorage.setItem('Books', bookList);
    location.reload();
}

const submitButton = document.querySelector('#button');
submitButton.addEventListener('click', addBook);