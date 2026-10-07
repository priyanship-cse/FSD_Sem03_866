
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("."));

let products = [];

app.post("/products", (req, res) => {
    products.push(req.body);
    res.send("Product Added Successfully");
});

// GET - all products
app.get("/products", (req, res) => {
    res.json(products);
});

// DELETE - product by id
app.delete("/products/:id", (req, res) => {
    const id = req.params.id;

    products = products.filter(product => product.id != id);

    res.send("Product Deleted Successfully");
});

app.listen(3011, () => {
    console.log("Server running on port 3011");
});