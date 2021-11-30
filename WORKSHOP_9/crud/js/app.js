
/**
 *  add the books in the localstorage
 */
function addBook() {

  //read the book title field
  const bookName = document.getElementById('title').value;
  const authorName = getAuthor();

  console.log('El libro es:', bookName);
  //insert to a database
  let booksDb = JSON.parse(localStorage.getItem('books'));
  if (!booksDb) {
    booksDb = [];
  }
  const book = {
    name: bookName,
    id: booksDb.length + 1,
    author: authorName
  }
  booksDb.push(book);
  localStorage.setItem('books', JSON.stringify(booksDb));
  //reload the book list
  showListOfBooks();
  reset();
}

/********************************************************************************* */

/**
 * Add author in localstorage
 */
function addAuthor() {

  //read the author title field
  const authorName = document.getElementById('author').value;

  console.log('El autor es:', authorName);
  //insert to a database
  let authorDb = JSON.parse(localStorage.getItem('authors'));
  if (!authorDb) {
    authorDb = [];
  }
  const author = {
    id: authorDb.length + 1,
    name: authorName
    
  }
  authorDb.push(author);
  localStorage.setItem('authors', JSON.stringify(authorDb));
  //reload the author options
  loadAuthorsList();
  reset();
}

/********************************************************************************* */

/**
 * shows, localstorage contains
 */
function showListOfBooks() {
  const books = JSON.parse(localStorage.getItem('books'));
  const table = document.getElementById('books_table');

  let rows = "";
  books.forEach((book, index) => {
    let row = `<tr>`;
    row += `<td>${book.id}</td>`;
    row += `<td>${book.name}</td>`;
    row += `<td>${book.author}</td>`;
    row += `<td> <a onclick="editBook(${book.id})" class="link edit">Edit</a>  |  <a  onclick="deleteBook(${book.id});" class="link delete">Delete</a>  </td>`;
    rows += row + "</tr>";
  });
  table.innerHTML = rows;

  // read books from localstorage
  // generate the HTML table to show the boook
}

/********************************************************************************* */

/**
 * Edits an specific book
 *
 * @param {*} bookId
 */
function editBook(bookId) {
  // read all books from the database
  const books = JSON.parse(localStorage.getItem('books'));

  // find the book with Id
  const bookFound = books.find((book) => {
    if (book.id == bookId) {
      return book;
    }
  });
  console.log('book: ', bookFound)
  // render the information of the book in the edit form
  if (bookFound) {
    // fill the fields with the data of the book
    document.getElementById('edit-book-name').value = bookFound.name;
    document.getElementById('editAuthor').value = bookFound.author;
    document.getElementById('edit-book-id').value = bookFound.id;
  } else {
    alert(`No book was found with id ${bookId}`);
  }
}

/********************************************************************************* */

/**
 * Delete an specific book
 *
 * @param {*} bookId
 */
function deleteBook(bookId) {
  // read all books from the database
  const books = JSON.parse(localStorage.getItem('books'));

  // find the book with Id and remove it from the list
  const booksEdited = [];
  books.forEach((book) => {
    if (book.id != bookId) {
      booksEdited.push(book);
    }
  });

  // replace the existing array
  localStorage.setItem('books', JSON.stringify(booksEdited));

  // reload the book list
  showListOfBooks();
}

/********************************************************************************* */

/**
 * Saves the edited book
 *
 */
function saveBook() {

  // get the data from fields
  const books = JSON.parse(localStorage.getItem('books'));
  const newBookName = document.getElementById('edit-book-name').value;
  const newAuthor = document.getElementById('editAuthor').value;
  const bookId = document.getElementById('edit-book-id').value;

  // find the book in the database and edit it
  const booksEdited = books.map((book) => {
    if (book.id == bookId) {
      book.name = newBookName;
      book.author = newAuthor;
    }
    return book;
  });

  // replace the existing array
  localStorage.setItem('books', JSON.stringify(booksEdited));

  // reload the book list
  showListOfBooks();
  resetEdit() 

}

/********************************************************************************* */

/**
 * Load Authors in the option tag
 */
function loadAuthorsList() {
  // read authors from the database
  const authors = JSON.parse(localStorage.getItem('authors'));

  if (authors) {
    let options = "";
    authors.forEach((author) => {
      options += `<option value="${author.id}">${author.name}</option>`;
    });
    console.log(options);
    // renders the select authors-list with the authors found
    document.getElementById('authors-list').innerHTML = options;
  }
}

/********************************************************************************* */

/**
 * Validate title and author lenght is bigger than 3
 */
function validateBookAuthor() {
  //read the book title field
  const bookName = document.getElementById('title').value;
  const authorName = document.getElementById('author').value;
  if (bookName.length > 1){
    document.getElementById('author').disabled = true;
  }else if (authorName.length > 1 ){
    document.getElementById('title').disabled = true;
  } 
  
  if (bookName.length > 3 || authorName.length > 3 ) {
    document.getElementById('add-book-button').disabled = false;
  } else {
    document.getElementById('add-book-button').disabled = true;
  }
}

/**********************************************************************************/

/**
 * Reset values
 */
function reset()  {
  document.getElementById('author').disabled = false;
  document.getElementById('title').disabled = false;
  document.getElementById('author').value = "";
  document.getElementById('title').value = "";
}

/********************************************************************************* */

/**
 * Reset values
 */
 function resetEdit()  {
  document.getElementById('editAuthor').value = "";
  document.getElementById('edit-book-name').value = "";
}

/********************************************************************************* */

/**
 * Validate if add book or authors
 */
function validateBA() {
  const author = document.getElementById('author').value;
  

  if (author.length > 3) {
    addAuthor();
  }
  else{
    addBook();
  }
 

}

/**********************************************************************************/

/**
 * Get nameAuthor
 * @returns name
 */
function getAuthor(){
  const idAuthor =  document.getElementById('authors-list').value;
  const authors = JSON.parse(localStorage.getItem('authors'));
  let authorName = "";

  for (x of authors){
    if (x.id == idAuthor){
      authorName = x.name;
    } 
  }

  console.log(authorName);
  
  return authorName;
}

/**********************************************************************************/

showListOfBooks();
loadAuthorsList();
