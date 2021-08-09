let books = [];

const addBook = (ev) => {
    ev.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;

    const bookData = {
        title: title,
        author: author,
    }

    books.push(bookData);
    localStorage.setItem('Books', JSON.stringify(books));
}

const submitButton = document.querySelector('#button');
submitButton.addEventListener('click', addBook);