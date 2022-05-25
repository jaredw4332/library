let myLibrary = [];

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

    let example = new Book(bookTitle, bookAuthor, bookPages, bookRead)
    console.log(example.bookInfo())
}


const theHobbit = new Book("Himmy benas", "Jimmy Beans", 101, "will never read")
console.log(theHobbit.bookInfo)
