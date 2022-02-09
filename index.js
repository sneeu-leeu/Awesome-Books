let books = [new Book("book1", "Author1"), new Book("book2", "Author2"), new Book("book3", "Author3")];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function populateBooks() {
  let bookList = document.querySelector('.book-list');

  books.forEach(book => {
    let bookContainer = document.createElement('div');
    let bookTitle = document.createElement('p');
    bookTitle.innerHTML = book.title
    let bookAuthor = document.createElement('p');
    bookAuthor.innerHTML = book.author
    bookContainer.append(bookTitle, bookAuthor);
    bookList.append(bookContainer);
  });
  console.log(bookList);
}

window.addEventListener('load', populateBooks);