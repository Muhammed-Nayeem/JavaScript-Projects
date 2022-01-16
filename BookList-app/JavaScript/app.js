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
    const StoreBooks = [
      {
        title: "Book One",
        author: "John Doe",
        isbn: "mn12345",
      },
      {
        title: "Book Two",
        author: "John Doe",
        isbn: "mn12345",
      },
    ];

    const books = StoreBooks;
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

  // clear input fields method: clear all input
  static clearInputFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// Store Class: Manage Local Storage

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
    alert("You've must provide all the input data!");
  } else {
    // create a Book class instantiate
    const book = new Book(title, author, isbn);

    // add to book list method invoked
    UI.addToBookList(book);

    // clear input fields method invoked
    UI.clearInputFields();
  }
});

// Event: Remove Books
const bookList = document.querySelector("#book-list");
bookList.addEventListener("click", (e) => {
  // remove book from UI method invoked
  UI.removeBookFromUI(e.target);
});
