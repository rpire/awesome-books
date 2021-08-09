let books = [];

const addBook = (ev) => {
    ev.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    
    const bookData = {
        title,
        author,
    };

    const stringifiedBooks = JSON.stringify(bookData);
    books.push(stringifiedBooks);

    let bookList = JSON.stringify(books);
    localStorage.setItem('Books', bookList);
}

const submitButton = document.querySelector('#button');
submitButton.addEventListener('click', addBook);