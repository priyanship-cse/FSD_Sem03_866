// delete this operation 

const express = require('express');
const app = express();

app.use(express.json());

let students = [
    {
        id: 1,
        name: "Priyanshi",
        branch: "CSE"
    },
    {
        id: 2,
        name: "Nishu",
        branch: "IT"
    }
];

// Home route
app.get('/', (req, res) => {
    res.send("Student API is running");
});

// GET operation
// Show students to get data
app.get('/students', (req, res) => {
    res.json(students);
});

// POST operation
// Add new student data
// app.post('/students', (req, res) => {
//       const newStudent = req.body;
//     students.push(newStudent);

//     res.json({
//         message: "Student added successfully",
//         student: newStudent
//     });
// });

app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    students = students.filter(student => student.id !== id);

    res.json({
        message: "Student deleted successfully"
    });
});

// Start server
app.listen(3005, () => {
    console.log("Server running at http://localhost:3005");
});