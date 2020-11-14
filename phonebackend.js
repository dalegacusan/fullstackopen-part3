require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const Person = require('./models/person');

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
    });
});

app.post("/api/persons", (req, res) => {
    const { name, number } = req.body;

    const newPerson = new Person({
        name,
        number
    });

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
            newPerson.save().then((savedPerson) => {
                // savedPerson returns the document saved
                res.json(savedPerson);
            });
        }

    }

});

app.get("/api/persons/:id", (req, res) => {
    const id = req.params.id;

    // Finds a single document by its _id field
    // _id = id
    Person.findById(id)
        .then(person => {
            if (person) {
                res.json(person);
            } else {
                res.status(204).end();
            }
        });
});

app.delete("/api/persons/:id", (req, res) => {
    const id = req.params.id;

    Person.findById({ _id: id }).then(person => {
        if (person) {
            Person.deleteOne({ _id: id }, (err, result) => {
                if (err) {
                    res.json({ error: "An error has occured in deleting" });
                } else {
                    console.log("Successful Deletion");
                }
            });
        } else {
            // 204 - No Content
            res.status(204).end();
        }
    });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}`);
});