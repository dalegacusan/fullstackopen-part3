const mongoose = require('mongoose');

const DB_PASSWORD = process.argv[2];
const URL = `mongodb+srv://phonebook-app:${DB_PASSWORD}@cluster0.87rwo.mongodb.net/<dbname>?retryWrites=true&w=majority`;

/*
                    node mongo.js <password> <NAME> <PHONE NUMBER>
    process.argv[]   [0]   [1]       [2]       [3]      [4]
 */

// Connect to MongoDB Database
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

// Create a Schema
const personSchema = new mongoose.Schema({
    name: String,
    number: String
});

// Create a model
const Person = mongoose.model('Person', personSchema);

const newPerson = new Person({
    name: process.argv[3],
    number: process.argv[4]
});

// Check if password is the only parameter given
if (process.argv[3] === undefined) {
    // Print Entries
    console.log("Phonebook:");
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person.name, person.number);
        });

        mongoose.connection.close();
    });
} else {
    // Add Entry
    newPerson.save().then(result => {
        const { name, number } = result;
        console.log(`added ${name} number ${number} to phonebook`);
        mongoose.connection.close();
    });
}


