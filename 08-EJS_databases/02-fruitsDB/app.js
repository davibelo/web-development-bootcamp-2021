const mongoose = require('mongoose');

// Connecting to a local mongodb server / mongo DB
// if the particular DB doesn't exists, it will create it
mongoose.connect('mongodb://localhost:27017/fruitsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Creating a document schema
const fruitSchema = new mongoose.Schema({
    // you can include data validation
    name: {
        type: String,
        required: [true, 'no name specified']
    },
    score: {
        type: Number,
        min: 0,
        max: 10
    },
    // no validation
    review: String
});

// Creating a mongoose model
// It is used to manipulate mongo databases
// first parameter is collection name
// second parameter is the collection schema
// mongoose create a collection with model name but lowered case and plural
// example: model name = Fruit => collection = fruits
const Fruit = mongoose.model('Fruit', fruitSchema);

// Creating data

const banana = new Fruit({
    name: 'banana',
    score: 10,
    review: 'perfect'
});

const kiwi = new Fruit({
    name: 'kiwi',
    score: 9,
    review: 'delicious but small'
});

const apple = new Fruit({
    name: 'apple',
    score: 8,
    review: 'not bad'
});

// validation test 1
const peach = new Fruit({
    score: 5,
    review: 'validation test'
});

// validation test 2
const pineapple = new Fruit({
    name: 'pineapple',
    score: 34,
    review: 'validation test'
});

// Saving on database
// banana.save();
// kiwi.save();
// apple.save();
// peach.save();
// pineapple.save();

// Other way to save documents on database
// OR
// Fruit.insertMany([banana, kiwi, apple, peach, pineapple],function(err){
//     if (err) {
//         console.log(err);
//     }else {
//         console.log('Success')
//     }
// });

// Reading data

// second argument of the callback function is a js object with query result
Fruit.find({}, function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        console.log(fruits);
    }
    // loops to access fruits collection and log only names
    // for (let index = 0; index < fruits.length; index++) {
    //     console.log(fruits[index].name);        
    // }
    fruits.forEach(function (item) {
        console.log('name:' + item.name + ' score:' + item.score);
    });
});

// Updating data

// Fruit.updateOne(
//     // filter
//     {name:'apple'},
//     // field do update
//     {score: 10},
//     // logging error
//     function(err){
//         if (err){
//             console.log(err);
//         }else{
//             console.log('Successfully updated')
//         }
//     }
// );

// Deleting data

// Fruit.deleteOne({
//         name: 'onion'
//     },
//     function (err) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Successfully deleted')
//         }
//     }
// );

// Building relationships with embedded documents

// Creating a person schema
// It have a field that is a embedded database schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

// Creating a person model
const Person = mongoose.model('Person', personSchema);

// Creating a document with embedded relationship
const John = new Person({
    name: 'John',
    age: 37,
    favoriteFruit: apple
});
// John.save();

Person.find({}, function (err, people) {
    if (err) {
        console.log(err);
    } else {
        console.log(people);
    }
    mongoose.connection.close();
});