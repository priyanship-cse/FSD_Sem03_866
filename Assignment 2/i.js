
async function addBook() {

    const book = {
        id: Number(document.getElementById("bookId").value),
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        year: Number(document.getElementById("year").value)
    };

    await fetch("/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    });

    getBooks();
}


async function getBooks() {

    const response = await fetch("/books");
    const books = await response.json();

    const list = document.getElementById("bookList");

    list.innerHTML = "";

    books.forEach(book => {

        list.innerHTML += `
            <div class="book">

                <div class="book-info">
                    <b>ID:</b> ${book.id}<br>
                    <b>Title:</b> ${book.title}<br>
                    <b>Author:</b> ${book.author}<br>
                    <b>Year:</b> ${book.year}
                </div>

                <button class="delete-btn"
                    onclick="deleteBook(${book.id})">
                    Delete
                </button>

            </div>
        `;
    });
}


async function updateBook() {

    const id = document.getElementById("bookId").value;

    const book = {
        id: Number(id),
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        year: Number(document.getElementById("year").value)
    };

    await fetch(`/books/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    });

    getBooks();
}


async function deleteBook(id) {

    await fetch(`/books/${id}`, {
        method: "DELETE"
    });

    getBooks();
}


getBooks();

