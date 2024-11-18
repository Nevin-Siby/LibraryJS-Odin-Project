const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    toggleReadStatus() {
        this.read = !this.read;
    }
}



function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayLibrary();
}

function displayLibrary() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = ''; // Clear the display

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.dataset.index = index; // Set data-index for easy reference
        bookDiv.innerHTML = `
            <p><strong>Title:</strong> ${book.title}</p>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read:</strong> ${book.read ? 'Yes' : 'No'}</p>
            <button onclick="toggleReadStatus(${index})">Toggle Read</button>
            <button onclick="removeBook(${index})">Remove</button>
        `;
        libraryDiv.appendChild(bookDiv);
    });
}


document.getElementById('bookForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    document.getElementById('bookFormContainer').style.display = 'none';
    e.target.reset();
});

document.getElementById('newBookButton').addEventListener('click', () => {
    document.getElementById('bookFormContainer').style.display = 'block';
});

function removeBook(index) {
    myLibrary.splice(index, 1); // Remove book from array
    displayLibrary(); // Refresh display
}

function toggleReadStatus(index) {
    myLibrary[index].toggleReadStatus();
    displayLibrary();
}
