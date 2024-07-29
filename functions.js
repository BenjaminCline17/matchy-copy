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
/**
 * I: function takes input array and string
 * O: returns animal's object if an animal with that exists, return null if no animal with that name exists
 * C:N/A
 * E:N/A
 */

//declare function search with animals array and name string
function search(animals, name) {
    //for loop to iterate through array
   for (let i = 0; i < animals.length; i++) {
    //if animals[i].name equal name return animals[i]
    if (animals[i].name == name) {
        return animals[i];
    } //return null
   } return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* 
I:function takes animals, name, and replacement
O:if name exists within animals array, replace entire object with replacement object
C:N/A
E:N/A
*/
//declare replace function with animals array, name string, and replacement object
function replace(animals, name, replacement) {
    //for loop to iterate through animals array
for (let i = 0; i < animals.length; i++) {
    //if animals[i].name equals name, animals[i] equals replacement
    if (animals[i].name == name) {
        animals[i] = replacement;
    }
    //return animals.name
} return animals.name;
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* 
I:function takes animals array and name string
O:if an animal with name exists with animals, remove it
C:N/A
E:N/A
*/
//declare remove function with animals array and name string
function remove(animals, name) {
    //for loop to iterate through animals array
   for (let i = 0; i < animals.length; i++) {
    //if animals[i].name equals name, delete animals[i] 
    if (animals[i].name == name) {
        delete animals[i];
    }// return animals.name
   } return animals.name;
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



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