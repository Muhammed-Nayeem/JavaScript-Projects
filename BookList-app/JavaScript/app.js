// Book Class: Represent the books
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Manage UI Tasks
class UI {
  // display method: to display all the books on UI
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addToBookList(book));
  }

  // add method: add books to UI book list
  static addToBookList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="text-danger delete"><i class="fas fa-trash-alt"></i></a></td>
    `;
    list.appendChild(row);
  }

  // remove method: remove books from UI book list
  static removeBookFromUI(el) {
    if (el.parentElement.classList.contains("delete")) {
      el.parentElement.parentElement.parentElement.remove();
    }
  }

  // show alert method: added and remove alert
  static showAlert(message, className) {
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-${className}`;
    alertDiv.appendChild(document.createTextNode(message));

    const formElement = document.querySelector(".form-element");
    formElement.insertAdjacentElement("afterbegin", alertDiv);

    // vanishing alert message after 1 second
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 1000);
  }

  // clear input fields method: clear all input
  static clearInputFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// Store Class: Manage Local Storage
class Store {
  // getBooks method: get book list from local storage
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  // addBook method: add the books to the local storage
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  // remove book method: remove book from local storage
  static removeBooksFromLocalStorage(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

// Event: Display books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add Books
const bookForm = document.getElementById("book-form");
bookForm.addEventListener("submit", (e) => {
  // change the default form behavior
  e.preventDefault();

  // select all the elements & assign them to variables
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  //input validation checking
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("You've must provide all the input data!", "danger");
  } else {
    // create a Book class instantiate
    const book = new Book(title, author, isbn);

    // add to book list method invoked
    UI.addToBookList(book);

    // add book to local storage
    Store.addBook(book);

    // show alert for added successfully
    UI.showAlert("Book Added Successfully.", "success");

    // clear input fields method invoked
    UI.clearInputFields();
  }
});

// Event: Remove Books
const bookList = document.querySelector("#book-list");
bookList.addEventListener("click", (e) => {
  // remove book from UI method invoked
  UI.removeBookFromUI(e.target);

  // remove book from local storage
  Store.removeBooksFromLocalStorage(e.target.parentElement.parentElement.previousElementSibling.textContent);

  // show alert for delete
  UI.showAlert("Book Removed Successfully.", "success");
});
