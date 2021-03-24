import React from "react";
import animals, { useAnimals } from "../animals";

// animals is a array of objects
// console.log(animals);

// 1st destructuring
// destructuring array animals
const [cat, dog] = animals;
// const [cat, dog] = [animals[0], animals[1]];
// const cat  = animal[0];
// const dog = animal[1];

// cat is a object
// console.log(cat, dog);

// 2nd destructuring
// destructuring object cat
// const { name, sound } = cat;

// assigning default values in case of empty values inside structure
// const { name="Fluffy", sound="Purr" } = cat;

// destructuring object dog
// using variables names different from inside structure
const { name: animalName, sound: animalSound } = dog;

// destructuring objects inside object
const {
  name,
  sound,
  feedingRequirements: { food, water },
} = cat;

function Destructuring0() {
  return (
    <div>
      <p>Destructuring Explanation Example:</p>
      <p>{name}</p>
      <p>{sound}</p>
      <p>{animalName}</p>
      <p>{animalSound}</p>
      <p>{food}</p>
      <p>{water}</p>
    </div>
  );
}
export default Destructuring0;
