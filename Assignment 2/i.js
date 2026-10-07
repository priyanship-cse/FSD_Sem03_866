const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("."));

let books = [];

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

    books = books.filter(book => book.id != id);

    res.send("Book Deleted Successfully");
});

app.listen(3011, () => {
    console.log("Server running on port 3011");
});