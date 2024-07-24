// Book and User data structures
let books = [];
let users = [];
let bookId = 1;
let userId = 1;
let currentBookId = null;

// Function to add a new book
function addBook() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;

    if (title && author) {
        books.push({ id: bookId++, title: title, author: author, isAvailable: true });
        document.getElementById('bookTitle').value = '';
        document.getElementById('bookAuthor').value = '';
        displayBooks();
    }
}

// Function to add a new user
function addUser() {
    const name = document.getElementById('userName').value;

    if (name) {
        users.push({ id: userId++, name: name, borrowedBooks: [] });
        document.getElementById('userName').value = '';
        displayUsers();
    }
}

// Function to display available books
function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach(book => {
        const li = document.createElement('li');
        li.innerText = `${book.title} by ${book.author}`;
        if (book.isAvailable) {
            const borrowButton = document.createElement('button');
            borrowButton.innerText = 'Borrow';
            borrowButton.onclick = () => showBorrowOptions(book.id);
            li.appendChild(borrowButton);
        } else {
            li.innerText += ' (Not Available)';
        }
        bookList.appendChild(li);
    });
}

// Function to display users
function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        const returnButton = document.createElement('button');
        returnButton.innerText = 'Return Books';
        returnButton.onclick = () => returnBooks(user.id);
        li.appendChild(returnButton);

        if (user.borrowedBooks.length > 0) {
            const borrowedBooksList = document.createElement('ul');
            user.borrowedBooks.forEach(book => {
                const bookLi = document.createElement('li');
                bookLi.innerText = book.title;
                borrowedBooksList.appendChild(bookLi);
            });
            li.appendChild(borrowedBooksList);
        }
        userList.appendChild(li);
    });
}

// Function to show borrow options
function showBorrowOptions(bookId) {
    currentBookId = bookId;
    const userSelect = document.getElementById('userSelect');
    userSelect.innerHTML = '';

    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.text = user.name;
        userSelect.appendChild(option);
    });

    document.getElementById('borrowSection').style.display = 'block';
}

// Function to confirm borrow
function confirmBorrow() {
    const userId = document.getElementById('userSelect').value;
    borrowBook(currentBookId, userId);
    document.getElementById('borrowSection').style.display = 'none';
}

// Function to borrow a book
function borrowBook(bookId, userId) {
    const user = users.find(u => u.id == userId);
    const book = books.find(b => b.id === bookId);

    if (user && book && book.isAvailable) {
        book.isAvailable = false;
        user.borrowedBooks.push(book);
        displayBooks();
        displayUsers();
    }
}

// Function to return borrowed books
function returnBooks(userId) {
    const user = users.find(u => u.id === userId);

    if (user) {
        user.borrowedBooks.forEach(book => {
            book.isAvailable = true;
        });
        user.borrowedBooks = [];
        displayBooks();
        displayUsers();
    }
}
