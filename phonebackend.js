require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const DB_NAME = process.env.MONGO_DB_NAME;
const DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
const URL = `mongodb+srv://phonebook-app:${DB_PASSWORD}@cluster0.87rwo.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }).then(() => {
    console.log("Successful Connection");
});

const personSchema = new mongoose.Schema({
    name: String,
    number: String
});

const Person = mongoose.model('Person', personSchema);

/*
    Static Folder is like a "route"
        Check index.html
        You can see that href="static/css"
        The "build" folder has a folder named "static"
        that has "css" folder aswell inside
            It knows how to render index.html
            because it is in the root of the "build" folder
*/
app.use(express.static('build'));

app.use(cors());
app.use(express.json());

morgan.token('data', (req, res) => {
    if (req.method === "POST") {
        return JSON.stringify(req.body);
    } else {
        return null;
    }
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'));

let persons = [
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
    },
    {
        id: 4,
        name: "John Doe",
        number: "220-1234346"
    }
];

app.get("/", (req, res) => {
    res.send("Succesfully here!");
});

app.get("/info", (req, res) => {
    res.send(
        `<div><p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p></div>`
    );
});

app.get("/api/persons", (req, res) => {
    Person.find({}).then(result => {
        res.json(result);

        mongoose.connection.close();
    });
});

app.post("/api/persons", (req, res) => {
    const { name, number } = req.body;

    const newPerson = {
        id: Math.random() * 100000,
        name,
        number
    };

    // Error Handler IF NAME OR NUMBER IS MISSING
    if (!name) {
        res.status(404).json({ error: "Name is missing." });
    } else if (!number) {
        res.status(404).json({ error: "Number is missing." });
    } else {

        // Error Handler IF NAME ALREADY EXISTS
        const findPerson = persons.find(person => person.name === name);

        if (findPerson) {
            // 409 - Conflict
            res.status(409).json({ error: "Name must be unique." });
        } else {
            persons = [...persons, newPerson];

            res.json(persons);
        }

    }

});

app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id);

    const person = persons.find(person => person.id === id);

    if (person) {
        res.json(person);
    } else {
        // 204 - No Content
        res.status(204).end();
    }
});

app.delete("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(person => person.id === id);

    if (person) {
        res.json([...persons.filter(person => person.id !== id)]);
    } else {
        // 204 - No Content
        res.status(204).end();
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}`);
});