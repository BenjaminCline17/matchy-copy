/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// variable animal equals empty object
var animal = {};
animal.species = "Cat";
animal["name"] = "Jeffery";
animal.noises = [];
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "Meow";
noises.push("Purring");
noises.unshift("Scratching");
noises.splice(noises.length, 0, "Hissing");
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
animal.noises.push("Eating");
console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  Dot notation and Bracket Notation
 * 2. What are the different ways of accessing elements on arrays?
 * Bracket Notation only
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
var duck = {
  species: 'Duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
var dog = {
  species: 'Dog',
  name: 'Fred',
  noises: ['bark', 'howl', 'growl', 'whimper']
};
animals.push(dog);
var rabbit = {
  species: 'Rabbit',
  name: "Jessica",
  noises: ['squeak', 'nibble']
};
animals.push(rabbit);
console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I choose the Array data structure since it can effectively hold a list of string values
/* 
I: function takes arr input
O: return random index from animals array
C:N/A
E:N/A
*/


var friends = [];
function getRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)];
}
const randomIndex = getRandom(animals);
friends.push(randomIndex.name);
console.log(friends);
randomIndex["friends"] = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}