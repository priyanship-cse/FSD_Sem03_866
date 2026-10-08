const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static(__dirname));

let books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        year: 1988
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018
    },
    {
        id: 3,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        year: 1997
    },
    {
        id: 4,
        title: "Wings of Fire",
        author: "A. P. J. Abdul Kalam",
        year: 1999
    },
    {
        id: 5,
        title: "Harry Potter",
        author: "J. K. Rowling",
        year: 1997
    }
];


app.get("/books", (req, res) => {
    res.json(books);
});


app.post("/books", (req, res) => {

    books.push(req.body);

    res.send("Book Added Successfully");

});


app.put("/books/:id", (req, res) => {

    const id = req.params.id;

    const index = books.findIndex(book => book.id == id);

    if (index == -1) {
        return res.status(404).send("Book Not Found");
    }

    books[index] = req.body;

    res.send("Book Updated Successfully");

});


app.delete("/books/:id", (req, res) => {

    const id = req.params.id;

    const index = books.findIndex(book => book.id == id);

    if (index == -1) {
        return res.status(404).send("Book Not Found");
    }

    books.splice(index, 1);

    res.send("Book Deleted Successfully");

});


app.listen(3011, () => {

    console.log("Server running on port 3011");

});

