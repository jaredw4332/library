let myLibrary = [];
const libraryDisplay = document.getElementById("libraryDisplay")

const beans = new Book("beans", "jimmy beans", 5, "Not yet read")
const orange = new Book("Catcher in the Rye", "Ernest Hemingway", 20, "Read")
const orange2 = new Book("A Long Way Home From Midtown West", "Ernest Hemingway", 20, "Read")
const orange4 = new Book("Tommy", "Ernest Hemingway", 20, "Read")
const orange3 = new Book("Tommy", "Ernest Hemingway", 20, "Read")
const orange7 = new Book("Tommy", "Ernest Hemingway", 20, "Read")
const orange8 = new Book("Tommy", "Ernest Hemingway", 20, "Not yet read")
myLibrary.push(beans, orange, orange2, orange3, orange4, orange7, orange8)
bookDisplay()

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.bookInfo = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

function addBookToLibrary() {
    let bookTitle = document.getElementById("title").value
    let bookAuthor = document.getElementById("author").value
    let bookPages = document.getElementById("pages").value
    let bookRead = document.getElementById("read")
    
    if (!bookRead.checked) {
        bookRead = document.querySelector('input[name="read"]').value;
    }
    else {
        bookRead = document.getElementById("read").value
    }
    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead)
    myLibrary.push(newBook)

    bookDisplay()
    document.getElementById("bookInput").reset()
    return false
}

function bookDisplay() {
    let libraryLength = myLibrary.length
    for (let i = 0; i < libraryLength; i++) {
        if(document.getElementById(`book${i}`)) {
            continue
        }

        let book = document.createElement('div')
        book.setAttribute("id", `book${i}`)
        book.setAttribute("class", "bookContainer")
        libraryDisplay.appendChild(book)

        let bookTitle = document.createElement('p')
        bookTitle.setAttribute("class", "bookTitle")
        bookTitle.textContent = `${myLibrary[i].title}`
        book.appendChild(bookTitle)

        let bookAuthor = document.createElement('p')
        bookAuthor.setAttribute("class", "bookAuthor")
        bookAuthor.textContent = `Written by ${myLibrary[i].author}`
        book.appendChild(bookAuthor)

        let bookPages = document.createElement('p')
        bookPages.setAttribute("class", "bookPages")
        bookPages.textContent = `${myLibrary[i].pages} pages`
        book.appendChild(bookPages)

        let bookRead = document.createElement('button')
        bookRead.setAttribute("class", "bookRead")
        if (myLibrary[i].read == "Not yet read") {
            bookRead.classList.add("bookNotRead")
        }
        bookRead.onclick = function() {
            if (myLibrary[i].read == "Read") {
                myLibrary[i].read = "Not yet read"
                bookRead.classList.add("bookNotRead")
                bookRead.textContent = `${myLibrary[i].read}`
            }
            else {
                myLibrary[i].read = "Read"
                bookRead.classList.remove("bookNotRead")
                bookRead.textContent = `${myLibrary[i].read}`
            }
        }
        bookRead.textContent = `${myLibrary[i].read}`
        book.appendChild(bookRead)

        let bookRemoveButton = document.createElement('button')
        bookRemoveButton.setAttribute("class", "bookRemoveButton")
        bookRemoveButton.onclick = function() {
            book.remove()
            myLibrary.splice(book, 1)
        }
        book.appendChild(bookRemoveButton)
    }
}

const popupForm = document.getElementById("popupForm")
const formBackground = document.getElementById("formBackground")

function openForm() {
    popupForm.style.display = "block"
    formBackground.style.display = "block"
    document.querySelectorAll("#container")
    .forEach(element => element.style.filter = "blur(2px)");
}

function closeForm() {
    popupForm.style.display = "none";
    formBackground.style.display = "none"
    document.querySelectorAll("#container")
    .forEach(element => element.style.filter = "");
}

formBackground.addEventListener("click", closeForm)