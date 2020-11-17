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

app.get("/", (req, res) => {
    res.send("Succesfully here!");
});

// WORKING
app.get("/info", (req, res) => {
    Person.find({}).then(people => {
        res.send(
            `<div><p>Phonebook has info for <b>${people.length}</b> people</p><p>${new Date()}</p></div>`
        );
    });
});

// WORKING
app.get("/api/persons", (req, res) => {
    Person.find({}).then(result => {
        res.json(result);
    });
});

// WORKING
app.post("/api/persons", (req, res) => {
    const { name, number } = req.body;

    const newPerson = new Person({
        name,
        number
    });

    newPerson.save()
        .then((savedPerson) => {
            // savedPerson returns the document saved
            res.json(savedPerson);
        })
        .catch(err => {
            res.status(409).json(err);
        });

});

// WORKING
app.get("/api/persons/:id", (req, res, next) => {
    const id = req.params.id;

    // Finds a single document by its _id field
    // _id = id
    Person.findById(id)
        .then(person => {
            if (person) {
                res.json(person);
            } else {
                res.status(404).end();
            }
        })
        .catch((err) => next(err));
});

// WORKING
app.put("/api/persons/:id", (req, res, next) => {
    console.log("Did you reach me?");

    const { id, number } = req.body;

    Person.findByIdAndUpdate(id, { number }, { new: true }, (err, doc) => {
        if (err) {
            next(err);
        } else {
            res.json(doc);
        }
    });
});

// WORKING
app.delete("/api/persons/:id", (req, res, next) => {
    const id = req.params.id;

    Person.findByIdAndRemove(id)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            next(err);
        });

});

const errorHandler = (err, req, res, next) => {
    console.error(err.message);

    if (err.name === 'CastError') {
        return res.status(400).send({ error: 'Malformatted ID' });
    }

    next(err);

};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}`);
});