function addBook() {
  //read the book title field
  const bookName = document.getElementById('title').value;

  console.log('El libro es:', bookName);
  //insert to a database
  let booksDb = JSON.parse(localStorage.getItem('books'));
  if (!booksDb) {
    booksDb = [];
  }
  booksDb.push(bookName);
  localStorage.setItem('books', JSON.stringify(booksDb));
  //delete the book list
  DeleteBookInTable();
  //reload the book list
  showListOfBooks();
}

function showListOfBooks() {
  // read books from localstorage
  //
  
  //leemos lo que viene en el arreglo
  let books_name_array = JSON.parse(localStorage.getItem('books'));
  //leemos la cantidad de datos en el arreglo
  let cantidad_libros = books_name_array.length;
  //variable x para el for
  let x = 0;
  //
  
  // generate the HTML table to show the boook
  let tabla = document.getElementById("book_table");
  //recorremos el arreglo
  for (x; cantidad_libros>x;x++){
    //numero de filas
    let row = tabla.insertRow(x);
    //en la celda 0 ya que es uno solo
    let cell = row.insertCell(0);
    //insertamos en el html lo que viene en el arreglo
    cell.innerHTML= books_name_array[x];
  }
}

function DeleteBookInTable(){

  let x = 0;
  var tabla = document.getElementById('book_table');
  var filas = tabla.rows.length;
  for (var i = x; i < filas; i++) {
    tabla.deleteRow(x);
  }

}


function validateTitle() {
  //read the book title field
  const bookName = document.getElementById('title').value;
  if (bookName.length > 3) {
    document.getElementById('add-book-button').disabled = false;
  } else {
    document.getElementById('add-book-button').disabled = true;
  }
}

showListOfBooks();