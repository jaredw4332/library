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

const theHobbit = new Book("Himmy benas", "Jimmy Beans", 101, "will never read")

console.log(theHobbit.bookInfo())