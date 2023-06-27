/**
 * JavaScript has a number of built-in object types, such as:
 * Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, etc.
 * 
 * These objects are sometimes referred to as "native objects".
 * 
 * Constructor functions, commonly referred to as just "constructors", are special functions that allow us to build 
 * instances of these built-in native objects. All the constructors are capitalized.
 * 
 * To use a constructor function, I must prepend it with the operator new.
 * 
 * For example, to create a new instance of the Date object, I can run: new Date(). What I get back is the current datetime, such as:
 * 
 * Thu Feb 03 2022 11:24:08 GMT+0100 (Central European Standard Time) 
 * 
 * However, not all the built-in objects come with a constructor function. An example of such an object type is the built-in Math object.
 * 
 * Running new Math() throws an Uncaught TypeError, informing us that Math is not a constructor.
 * 
 * 
 * Besides constructor functions for the built-in objects, I can also define custom constructor functions.
 * 
 * Here's an example:
 */

function Icecream(flavor) {
    this.flavor = flavor
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

// Now i can make as many ice creams as i want:

let kiwiIcecream = new Icecream('kiwi')
let appleIcecream = new Icecream('apple')
kiwiIcecream; // --> Icecream {flavor: 'kiwi, meltIt: f}
appleIcecream; // --> Icecream {flavor: 'apple, meltIt: f}

// I've just built two instance objects of Icecream type.


/**
 * Instead of using Array, Function, and RegExp constructors, you should use their array literal, function literal, and pattern literal varieties: [], () {}, and /()/.'
 * 
 * However, when building objects of other built-in types, we can use the constructor.
 * 
 * Here are a few examples:
 */

new Date()
new Error()
new Map()
new Promise()
new Set()
new WeakSet()
new WeakMap()

// The above list is inconclusive, but it's just there to give you an idea of some constructor functions you can surely use.