
function addBook() {


}


let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

}

Book.prototype.toggleRead = function(){
 this.read = !this.read;
}

function toggleRead(index){
  myLibrary[index].toggleRead();
  render();

}

function render(){
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++){
   let book = myLibrary[i];
   let bookEl = document.createElement("div");
   bookEl.setAttribute("class", "book-card");
  bookEl.innerHTML = `
    <div class="card-header">
      <h3 class="title__book">${book.title}</h3>
      <h5 class="author__book">${book.author}</h5>
    </div>
    <div class="card__body">
      <p class="pages__book">${book.pages} pages</p>
      <p class="read-status__book">${book.read ? "Read" : "Not Read"}</p>
      <button class="btns_cards remove_btn" onclick="removeBook(${i})">Remove</button>
      <button class="btns_cards toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
    </div>`;

  libraryEl.appendChild(bookEl);

  }
}

function removeBook(index){
  myLibrary.splice(index, 1);
  render();
}


function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);
 myLibrary.push(newBook);
 render();

}


let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", functio =>{
  let newBookForm = document.querySelector("#new-book-form");
  console.log(newBookForm);
  newBookForm.style.display = "flex";
})

document.querySelector("#new-book-form").addEventListener("submit", function(event){
  event.preventDefault();
  addBookToLibrary()
})