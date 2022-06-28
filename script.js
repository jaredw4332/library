let myLibrary = [];
const libraryDisplay = document.getElementById("libraryDisplay")

const kant = new Book("Critique of Pure Reason", "Immanuel Kant", 856, "Not yet read")
const hemingway = new Book("The Sun Also Rises", "Ernest Hemingway", 247, "Read")
myLibrary.push(kant, hemingway)
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
    closeForm()
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

const title = document.getElementById("title")
const author = document.getElementById("author")
const pages = document.getElementById("pages")

title.addEventListener("invalid", function (event) {
    if (title.validity.valueMissing) {
        title.setCustomValidity("A book needs a title.")
        title.reportValidity()
    } else {
        title.setCustomValidity("")
    }
})

author.addEventListener("invalid", function (event) {
    if (author.validity.valueMissing) {
        author.setCustomValidity("A book needs an author.")
        author.reportValidity()
    } else {
        author.setCustomValidity("")
    }
})

pages.addEventListener("invalid", function (event) {
    if (pages.validity.valueMissing) {
        pages.setCustomValidity("A book needs pages.")
        pages.reportValidity()
    } else if (pages.validity.rangeUnderflow) {
        pages.setCustomValidity("A book still needs pages.")
        pages.reportValidity()
    } else {
        pages.setCustomValidity("")
    }
})