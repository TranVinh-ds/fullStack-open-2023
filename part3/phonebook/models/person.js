const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const url = process.env.MONGODB_URI;

console.log('connecting to', url);

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB', error.message);
  });

const numValidators = [
  {
    validator: (num) => {
      if ((num[2] === '-' || num[3] === '-') && num.length < 9) {
        return false;
      }
      return true;
    },
    message: 'must be at least 8 digits',
  },
  {
    validator: (num) => {
      return /^\d{2,3}-\d+$/.test(num);
    },
    message: 'invalid phone number',
  },
];

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  number: {
    type: String,
    validate: numValidators,
  },
});

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Person', personSchema);
