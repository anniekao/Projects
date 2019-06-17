/*Write a constructor for making “book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book

Put a function into the constructor that can report the book info like so

book.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

note: it is almost always best to return things rather than putting console.log() directly into the function. In this case, return the info string and log it after the function has been called:

console.log(theHobbit.info()); */

let myLibrary = [];
let categories = ["Title", "Author", "Pages", "Status", "Delete?"];

let mockingbird = new Book("To Kill a Mockingbird", "Harper Lee", 350, false);
let blood = new Book("In Cold Blood", "Truman Capote", 400, true);
let hunter = new Book("The Heart Is a Lonely Hunter", "Carson McCullers", 250, true);
myLibrary.push(mockingbird, blood, hunter);

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    var readStatus;
        if (this.read === true) {
            readStatus = "ready read";
        } else {
            readStatus = "not read yet";
        }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
   
};

/* Add a “NEW BOOK” button that brings up a form allowing users to input the 
details for the new book: author, title, number of pages, whether it’s been read 
and anything else you might want. */
const addBookToLibrary = function(event){
    event.preventDefault();
    let data = [];
    let form = document.getElementById('new-book');
    let dataCollect = function(){
        for (var field of form.elements)
            data.push(field.value);
    };
    dataCollect();
    data = data.splice(0,4);
    console.table(data);
};

let form = document.getElementById('new-book');
form.addEventListener('submit', addBookToLibrary);

function showForm(){
    var form = document.getElementById('new-book');
    form.style.display = 'block';
}

function render(){
    function generateTableHead(table){
        let thead = table.createTHead();
        let row = thead.insertRow();

        for (let category of categories){
            let th = document.createElement('th');
            let text = document.createTextNode(category);
            th.appendChild(text);
            row.append(th);
        }

        for (let book of myLibrary) {
            let row = table.insertRow();
            let keys = Object.keys(book);
            for (let key of keys){
                let cell = row.insertCell();
                let text = document.createTextNode(book[key]);
                cell.appendChild(text);
            }  

            let cell = row.insertCell();
            var btn = document.createElement('input');
            btn.type = 'button';
            btn.class = 'btn';
            btn.value = 'delete';
            btn.innerHTML = 'delete book';
            cell.appendChild(btn);  
        } 
    }
    let table = document.querySelector('table');
    generateTableHead(table);
}
render();