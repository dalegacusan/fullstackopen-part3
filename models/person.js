const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const URL = process.env.MONGO_DB_URL;

mongoose.connect(
  URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Successful Connection to MongoDB');
  }).catch((err) => {
    console.log('Error Connection to MongoDB:', err.message);
  });

const personSchema = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    minlength: 3,
    required: true,
    unique: true,
  },
  number: {
    type: String,
    minlength: 8,
    required: true,
  },
});
personSchema.plugin(uniqueValidator);

// This gets executed when the response is received to each object of the array
personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    /*
            ".id" will be a new property of returnedObject

            It will hold the value of the current "._id" which is an object
            and transforms it to a string.

            "._id" gets deleted but returnedObject has a copy
            of it stored in the ".id" property

            From _id: "xxxxxxx"
            to id: "xxxxxxx"
        */
    /* eslint-disable no-param-reassign */
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Person', personSchema);
