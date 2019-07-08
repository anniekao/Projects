// import { firebaseConfig } from "config.js";
let firebaseConfig = {
    apiKey: "AIzaSyAsuUPs4sLN-uemY6oBRlGNChtRQqoYlY4",
    authDomain: "top-projects-e6e4e.firebaseapp.com",
    databaseURL: "https://top-projects-e6e4e.firebaseio.com",
    storageBucket: "top-projects-e6e4e.appspot.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let categories = ["Title", "Author", "Pages", "", ""];

class Book {
    constructor (title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
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

function populate(data) {
    clearTable();
    let table = document.querySelector('table');
    generateTableHead(table);
    let tbody = document.createElement('tbody');
    table.append(tbody);

    let books = data.val();
    let keys = Object.keys(books);
    for (var key of keys) {
        let book = books[key];
        let row = table.insertRow();
        row.setAttribute('id', key);

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

        tbody.append(row);

        if (book.read === "Read") {
            let btn = document.createElement('input');
            let cell = row.insertCell();
            btn.type = 'button';
            btn.className = 'read-btn btn btn-success';
            btn.setAttribute('data-id', key);
            btn.addEventListener('click', e => {
                let id = btn.getAttribute('data-id');
                toggleStatus(e, id);
            });
            btn.value = book.read;
            cell.appendChild(btn);
        } else {
            let btn = document.createElement('input');
            let cell = row.insertCell();
            btn.type = 'button';
            btn.className = 'unread-btn btn btn-warning';
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
        btn.className = 'delete btn btn-danger';
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

function toggleStatus(event, id) {
    event.preventDefault();
    database.ref('books/').child(id).once('value', function (snapshot) {
        if (snapshot.val().read === "Unread") {
            database.ref("books/" + id).update({
                read: "Read"
            });
        } else {
            database.ref("books/" + id).update({
                read: "Unread"
            });
        }
    });
}

function writeBookData(book) {
    database.ref('books/').push(book);
}

function deleteBook(event, id) {
    event.preventDefault();

    database.ref("books/" + id).remove();    
    decrementCounter();
    
    let row = document.getElementById(id);
    row.parentNode.removeChild(row);
}

function dataCollect(form) {
    let data = [];
    let ele = form.elements;
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].name == 'status' && ele[i].checked == true) {
            data.push(ele[i].value); 
        } else if (ele[i].name !== 'status' && ele[i].value !== undefined) {
            data.push(ele[i].value);
        }
    }
    return data.splice(0, data.length - 2);
}

function addBookToDatabase(event) {
    // prevents the submit button from firing on load
    event.preventDefault();

    // collects data from the form
    let form = document.getElementById('new-book-form');
    let data = dataCollect(form);

    // takes the collected data and pushes it to the database
    var newEntry = new Book(data[0], data[1], data[2], data[3]);
    writeBookData(newEntry);
    incrementCounter();
    clearForm();
}

function clearForm() {
    document.getElementById('new-book-form').reset();
}

function clearTable() {
    let table = document.querySelector('table');
    table.innerHTML = "";
    clearForm();
}

function openNav() {
    document.getElementById("sideNav").style.width = "400px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

// dynamically creates table headings and table rows/cells, filling it with the content
function generateTableHead(table) {
    let thead = table.createTHead();
    thead.className = "thead-dark";
    let row = thead.insertRow();

    for (let category of categories) {
        let th = document.createElement('th');
        th.scope = "col";
        let text = document.createTextNode(category);
        th.appendChild(text);
        row.append(th);
    }
}

function confirmDelete() {
    if (confirm('Delete book?')) {
        return true;
    } else {
        return false;
    }
}

// creates and renders a table containing the books in the library
function render() {
    let table = document.querySelector('table');
    generateTableHead(table);
    populate();
}

let countRef = database.ref('bookCount');
countRef.on('value', displayNumBooks);

function displayNumBooks(data) {
    let counter = data.val();
    let sizeDisplay = document.getElementsByClassName('badge')[0];
    let key=Object.keys(counter);
    sizeDisplay.innerHTML = counter[key].count;
}

// Adds 1 to the number of books
function incrementCounter() {
    let counter = countRef.child('-LjDU77JJckaQC3lP-kR').child('count');
    counter.transaction(function(count){
        return (count || 0) + 1;
    });
}

// Subtracts 1 from the number of books
function decrementCounter() {
    let counter = countRef.child('-LjDU77JJckaQC3lP-kR').child('count');
    counter.transaction(function (count) {
        return (count || 0) - 1;
    });
}

render();