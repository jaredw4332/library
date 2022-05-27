let myLibrary = [];
const libraryDisplay = document.getElementById("libraryDisplay")

const beans = new Book("beans", "jimmy beans", 5, "not read")
const orange = new Book("tommy", "what", 20, "read")
myLibrary.push(beans, orange)
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
        bookAuthor.textContent = `${myLibrary[i].author}`
        book.appendChild(bookAuthor)

        let bookPages = document.createElement('p')
        bookPages.setAttribute("class", "bookPages")
        bookPages.textContent = `${myLibrary[i].pages}`
        book.appendChild(bookPages)

        let bookRead = document.createElement('button')
        bookRead.setAttribute("class", "bookRead")
        bookRead.onclick = function() {
            if (myLibrary[i].read == "read") {
                myLibrary[i].read = "not read"
                bookRead.classList.add("bookNotRead")
                bookRead.textContent = `${myLibrary[i].read}`
            }
            else {
                myLibrary[i].read = "read"
                bookRead.classList.remove("bookNotRead")
                bookRead.textContent = `${myLibrary[i].read}`
            }
        }
        bookRead.textContent = `${myLibrary[i].read}`
        book.appendChild(bookRead)

        let bookRemoveButton = document.createElement('button')
        bookRemoveButton.setAttribute("class", "bookRemoveButton")
        bookRemoveButton.textContent = "X"
        bookRemoveButton.onclick = function() {
            book.remove()
            myLibrary.splice(book, 1)
        }
        book.appendChild(bookRemoveButton)
    }
}

function openForm() {
    document.getElementById("popupForm").style.display = "block"
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}