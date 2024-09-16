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
var animal = {};
animal.species = "Cat";
animal["name"] = "Rorce";
animal.noises = [];
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "Meowing";
noises.unshift("Hissing");
noises.push("Scratching");
noises[noises.length] = "Purring";
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises; 
animal["noises"].push("Desturction");

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Dot and Bracket
 * 2. What are the different ways of accessing elements on arrays?
 * Bracket
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
var duck = {species: 'duck', name: "Jerome", noises: ['quack', 'honk', "sneeze", 'woosh']};
animals.push(duck);
var dog = {species: "dog", name: "Jerry", noises: ["Bark", "Growl"]};
var parot = {species: "parot", name: "Polly", noises: ["Squak", "Mimcry"]};
animals.push(dog);
animals.push(parot);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
//I:Function takes in array input
//O:Function should return a random index from the array input
//C:N/A
//E:N/A
function getRandom(array){
  //return a random number from array
return Math.floor(Math.random() * array.length)
}
//declare randomIndex, which equals a random index in the animals array
var randomIndex = getRandom(animals);
//push a random animal name into the friends array
friends.push(animals[randomIndex].name);
//add friends list to one of the animals in the animals array
animals[0]["friends"] = friends;
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