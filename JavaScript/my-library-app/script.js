let myLibrary = [];
let categories = ["No.", "Title", "Author", "Pages", "Status", "Delete?"];
let idNo = myLibrary.length;

let mockingbird = new Book("To Kill a Mockingbird", "Harper Lee", 350, false);
let blood = new Book("In Cold Blood", "Truman Capote", 400, true);
let hunter = new Book("The Heart Is a Lonely Hunter", "Carson McCullers", 250, true);
myLibrary.push(mockingbird, blood, hunter);

function Book (title, author, pages, read) {
    this.id = idNo;
    idNo++;
    this.title = title;
    this.author = author;
    this.pages = pages;
    read === true ? this.read = "Read": this.read = "Unread";
    
}

Book.prototype.info = function(){
    var readStatus;
        if (this.read === "Read") {
            readStatus = "already read";
        } else {
            readStatus = "not read yet";
        }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
   
};

/* Add a “NEW BOOK” button that brings up a form allowing users to input the 
details for the new book: author, title, number of pages, whether it’s been read 
and anything else you might want. */
const addBookToLibrary = function(event){
    // prevents the submit button from firing on load
    event.preventDefault();

    // collects data from the form
    let data = [];
    let form = document.getElementById('new-book-form');
    let dataCollect = function(){
        for (var field of form.elements)
            data.push(field.value);
    };
    dataCollect();

    // takes the collected data and adds a new book instance to the library
    data = data.splice(0, data.length-2);
    var newEntry = new Book (data[0], data[1], data[2], data[3]);
    myLibrary.push(newEntry);   
    updateTable(); 
    clearForm();
};

const deleteBookFromLibrary = function(event, id){
    event.preventDefault();
    myLibrary.splice(id, 1);
    updateBookId();
    updateTable();
    toggleForm();
};

const updateBookId = function(){
    let id = 0;
    for (var book of myLibrary){
        book.id = id;
        id++;
    }
}

const clearForm = function () {
    document.getElementById('new-book-form').reset();
};

const updateTable = function(){
    let table = document.querySelector('table');
    table.innerHTML = "";
    generateTable(table);
    clearForm();
    toggleForm();
};

let form = document.getElementById('new-book-form');
form.addEventListener('submit', addBookToLibrary);
let clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', clearForm);

function toggleForm(){
    var form = document.getElementById('new-book-form');
    if (form.style.display === 'block'){
        form.style.display = 'none';
    } else {
        form.style.display = 'block';
    }
}

// creates and renders a table containing the books in the library
function render(){
    let table = document.querySelector('table');
    generateTable(table);
}

// dynamically creates table headings and table rows/cells
const generateTable = function (table) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let category of categories) {
        let th = document.createElement('th');
        let text = document.createTextNode(category);
        th.appendChild(text);
        row.append(th);
    }

    for (let book of myLibrary) {
        let row = table.insertRow();
        row.id = book.id;
        let keys = Object.keys(book);
        for (let key of keys) {
            let cell = row.insertCell();
            let text = document.createTextNode(book[key]);
            cell.appendChild(text);
        }
        let cell = row.insertCell();
        var btn = document.createElement('input');
        btn.type = 'button';
        btn.class = 'btn';
        btn.addEventListener('click', e => {
            if (confirmDelete()){
                deleteBookFromLibrary(e, row.id);
            }
        });
        btn.value = 'delete';
        btn.innerHTML = 'delete book';
        cell.appendChild(btn);
    }
};

const confirmDelete = function(){
    if (confirm('Delete book?')){
        return true;
    } else {
        return false;
    }
};

render();