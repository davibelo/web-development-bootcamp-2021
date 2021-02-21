const mongoose = require('mongoose');

// Connecting to a local mongodb server / mongo DB
// if the particular DB doesn't exists, it will create it
mongoose.connect('mongodb://localhost:27017/fruitsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// mongoose model creation
// first parameter is collection name
// second parameter is a js object with collection schema
// mongoose create a collection with model name but lowered case and plural
// example: model name = Fruit => collection = fruits
const Fruit = mongoose.model('Fruit', {
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

// Creating data

// const banana = new Fruit({
//     name: 'banana',
//     score: 10,
//     review: 'perfect'
// });
// banana.save();

// const kiwi = new Fruit({
//     name: 'kiwi',
//     score: 9,
//     review: 'delicious but small'
// });
// kiwi.save();

// const apple = new Fruit({
//     name: 'apple',
//     score: 8,
//     review: 'not bad'
// });
// apple.save();

// const onion = new Fruit({
//     name: 'onion',
//     score: 1,
//     review: 'not fruit'
// });
// onion.save();

// validation test 1
// const garlic = new Fruit({
//     score: 5,
//     review: 'validation test'
// });
// garlic.save();

// validation test 2
// const garlic = new Fruit({
//     name: 'garlic',
//     score: 34,
//     review: 'validation test'
// });
// garlic.save();

// Other way to save documents on database
// OR
// Fruit.insertMany([banana, kiwi],function(err){
//     if (err) {
//         console.log(err);
//     }else {
//         console.log('Success')
//     }
// });

// Reading data

// second argument of the callback function is a js object with query result
Fruit.find(function (err, fruits) {
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
    mongoose.connection.close()
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


