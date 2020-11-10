const express = require('express');
const app = express();
const PORT = 3000;

const persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "010-213436"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "120-123346"
    }
];

app.get("/", (req, res) => {
    res.send("Succesfully here!");
});

app.get("/api/persons", (req, res) => {
    res.json(persons);
});

app.get("/info", (req, res) => {
    res.send(
        `<div><p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p></div>`
    );
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});