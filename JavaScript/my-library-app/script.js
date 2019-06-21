var firebaseConfig = {
    apiKey: "AIzaSyCnRyT2aNnBK3_ADVhfUAzZE8igy8R0AAU",
    authDomain: "my-library-app-7ab61.firebaseapp.com",
    databaseURL: "https://my-library-app-7ab61.firebaseio.com",
    storageBucket: "my-library-app-7ab61.appspot.com",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let categories = ["Title", "Author", "Pages", "Status", "Delete?"];
let idNo = 1;

function Book(title, author, pages, read) {
    this.id = idNo;
    idNo++;
    this.title = title;
    this.author = author;
    this.pages = pages;
    read === true ? this.read = "Read" : this.read = "Unread";
}

Book.prototype.info = function () {
    var readStatus;
    if (this.read === "Read") {
        readStatus = "already read";
    } else {
        readStatus = "not read yet";
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;

};

let database = firebase.database();
let booksRef = database.ref('books');

booksRef.on('value', populate, ErrData);

function populate(data){
    clearTable();
    let books = data.val();
    let keys = Object.keys(books);
    for (var key of keys){
        let book = books[key];

        let table = document.querySelector('table');
        let row = table.insertRow();
        
        let titleCell = row.insertCell();
        let titleText = document.createTextNode(book.title);
        titleCell.append(titleText);
        row.append(titleCell);

        let authorCell = row.insertCell();
        let authorText = document.createTextNode(book.author);
        authorCell.append(authorText);
        row.append(authorCell);

        let pagesCell = row.insertCell();
        let pagesText = document.createTextNode(book.pages);
        pagesCell.append(pagesText);
        row.append(pagesCell);

        if (book.read === "Read"){
            let btn = document.createElement('input');
            let cell = row.insertCell();
            btn.type = 'button';
            btn.className = 'read-btn';
            btn.setAttribute('data-id', key);
            btn.addEventListener('click', e => {
                 let id = btn.getAttribute('data-id');
                 toggleStatus(e, id);
            });
            btn.value = book.read;
            cell.appendChild(btn);
        } else if (book.read === "Unread"){
            let btn = document.createElement('input');
            let cell = row.insertCell();
            btn.type = 'button';
            btn.className = 'unread-btn';
            btn.setAttribute('data-id', key);
            btn.addEventListener('click', e => {
                let id = btn.getAttribute('data-id');
                toggleStatus(e, id);
            });
            btn.value = book.read;
            cell.appendChild(btn);
        }

        let btn = document.createElement('input');
        let cell = row.insertCell();
        btn.type = 'button';
        btn.className = 'delete-btn';
        btn.setAttribute('data-id', key);
        btn.addEventListener('click', e => {
            if (confirmDelete()) {
                let id = btn.getAttribute('data-id');
                deleteBook(e, id);
            }
        });
        btn.value = 'Delete';
        cell.appendChild(btn);
    }
}

function ErrData(err) {
    console.log('Error!');
    console.log(err);
}

function toggleStatus (event, id) {
    event.preventDefault();
    database.ref('books/').child(id).once('value', function(snapshot){
        if (snapshot.val().read === "Unread"){
            database.ref("books/" + id).update({read: "Read"});
        } else {
             database.ref("books/" + id).update({read: "Unread"});
        }
    });
}

function writeBookData(book) {
    database.ref('books/').push(book);
}

function deleteBook(event, id){
    event.preventDefault();
  
    database.ref("books/" + id).remove();
}

function dataCollect (form){
    let data = [];
    for (var field of form.elements){
        data.push(field.value);
    }
    return data;
}

function addBookToDatabase (event){
    // prevents the submit button from firing on load
    event.preventDefault();

    // collects data from the form
    let form = document.getElementById('new-book-form');
    let data = dataCollect(form);

    // takes the collected data and pushes it to the database
    data = data.splice(0, data.length-2);
    var newEntry = new Book (data[0], data[1], data[2], data[3]);
    writeBookData(newEntry);
    updateBookId(); 
    toggleForm();
    clearForm();
};

const updateBookId = function(){
    let id = 1;
    for (var book of myLibrary){
        book.id = id;
        id++;
    }
};

const clearForm = function () {
    document.getElementById('new-book-form').reset();
};

const clearTable = function(){
    let table = document.querySelector('table');
    table.innerHTML = "";
    clearForm();
};

let form = document.getElementById('new-book-form');
form.addEventListener('submit', addBookToDatabase);
let clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', clearForm);

function toggleForm (){
    event.preventDefault();
    var form = document.getElementById('new-book-form');
    if (form.style.display === 'block'){
        form.style.display = 'none';
    } else {
        form.style.display = 'block';
    }
}

let addBtn = document.getElementById('add-book-btn');
addBtn.addEventListener('click', toggleForm);

// dynamically creates table headings and table rows/cells, filling it with the content
function generateTable (table) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let category of categories) {
        let th = document.createElement('th');
        let text = document.createTextNode(category);
        th.appendChild(text);
        row.append(th);
    }

    populate();  
}

const confirmDelete = function(){
    if (confirm('Delete book?')){
        return true;
    } else {
        return false;
    }
};

// creates and renders a table containing the books in the library
const render = function () {
    let table = document.querySelector('table');
    generateTable(table);
}

render();