// Sample book data
const books = [
  { title: "Harry Potter", author: "J.K. Rowling", isbn: "978-1-60309-502-0" },
  { title: "Women and Men in India 2022", author: "Rao Inderjit Singh", isbn: "978-1-60309-517-4" },
  { title: "A Life", author: "J.K. Rowling", isbn: "978-1-60309-527-3" },
  { title: "Harry Potter", author: "Shashi Tharoor", isbn: "978-1-60309-535-8" },
  { title: "Human Anatomy", author: "	Dr. Ashvini Kumar Dwivedi", isbn: "978-1-60309-492-4" },
  { title: "Come! Let's Run", author: "Ma. Subramanian", isbn: "978-1-60309-513-6" },
];

// DOM elements
const bookList = document.getElementById("book-list");
const addBookForm = document.getElementById("add-book-form");
const searchInput = document.getElementById("search-input");

// Initial population of the book list
function populateBookList() {
  bookList.innerHTML = '';
  books.forEach(book => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span>${book.title} by ${book.author} (ISBN: ${book.isbn})</span>`;
    bookList.appendChild(listItem);
  });
}

// Prevent duplicate entries when adding a new book
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  if (!books.some(book => book.isbn === isbn)) {
    books.push({ title, author, isbn });
    populateBookList();
  } else {
    alert("This book already exists in the library.");
  }

  // Clear the form
  addBookForm.reset();
});

// Search functionality
document.getElementById("search-button").addEventListener("click", () => {
  const searchQuery = searchInput.value.toLowerCase();
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery) || book.author.toLowerCase().includes(searchQuery)
  );
  populateBookList(filteredBooks);
});

// Initial population of the book list
populateBookList();
