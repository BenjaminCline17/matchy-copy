/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I:Function takes in an input array and a input string
//O:Function should look through the input array to see if the input string exists in it, returning the array's object if so and null if not
//C:N/A
//E:N/A

function search(array, string){
    //for loop to iterate through array input
    for (let i = 0; i < array.length; i++){
    //if array[i].name equals string, return array[i]
    if (array[i].name == string){
        return array[i];
    }//return null if array input does not match string input
    } return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I:Function takes in an animals array, a name string, and a replacement object
//O:Function should replace the animal array's entire object with the replacement object if the name string exists within the animals array
//C:N/A
//E:N/A

function replace(animals, name, replacement){
    //use a for loop to iterate through the input array
    for (let i = 0; i < animals.length; i++){
        //if the current index of the input array's name key equals input name, change the array's entire object with the input replacement
        if (animals[i].name == name){
            animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I:Function takes in an animal array and a name string
//O:Function should remove an animal with the name string
//C:N/A
//E:N/A

function remove(animals, name){
 //use a for loop to iterate through the input array
 for (let i = 0; i < animals.length; i++){
    //if the name at the current animals index equals the input name, remove the animals array
    if(animals[i].name == name){
       return animals.splice(i);
    }
 }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I:Function takes in animals array and animal object
//O:Function should add the animal object to the animals array if it passes the correct conditions
//C:N/A
//E:N/A

function add(animals, animal){
//use a for loop to iterate through the input array
for (let i = 0; i < animals.length; i++){
    //use a if statement to see if animal Object passes the requirement
    if (animal.name.length > 0 && animal.species.length > 0 && animal.name != animals[i].name){
    //else return animals
    } else {
        return animals;
    }
    //return the result of pushing animal object into the animals array after the loop has finished
} return animals.push(animal);
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}