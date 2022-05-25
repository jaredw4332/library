let myLibrary = [];
const libraryDisplay = document.getElementById("libraryDisplay")

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
    let bookRead = document.querySelector('input[name="read"]:checked').value;

    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead)
    myLibrary.push(newBook)

    bookDisplay()
    document.getElementById("bookInput").reset()
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

        let bookRead = document.createElement('p')
        bookRead.setAttribute("class", "bookRead")
        bookRead.textContent = `${myLibrary[i].read}`
        book.appendChild(bookRead)
    }
}