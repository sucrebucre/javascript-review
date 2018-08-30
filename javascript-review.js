// write a function that takes in three parameters and returns the sum of those three parameters

function sum(a,b,c){
  return a + b + c;
}
sum(1,2,3);

// given a string, create a function that returns the last character in that string.
// examples:
// "cattywampus" --> s

function last_character(word){
  let string = word;
  let string_length = string.length;
  let last_character = string.charAt(string_length - 1);
  return last_character;
}

last_character('cattywampus');

// write a function that takes in one parameter and returns the cube of that parameter
// examples:
// 3 --> 27
// 4 --> 64

function cube (a){
  return a * a * a;
}
cube(4);

// define a function that takes in a string and reverses it. you are not allowed to
// call the "reverse" function (or any other string functions)

function reverse_word(word){
  let string = word;

  let i = string.length;
  let reversed_word = "";

  while(i--) {
     console.log(string[i]);
  }
}

reverse_word('sjors');

// write a function that takes in two arrays of the same length as parameters. From those two arrays,
// create, then return an object which contains the elements of the first array as keys, and the
// elements of the second array as values.
// examples:
// ["exciting", "exotic"], ["markets", "britain"] --> { exciting: "markets", exotic: "britain" }
// ["a", "b", "c"], ["x", "y", "z"] --> { a: "x", b: "y", c: "z" }

let array_1 = ["a","b",'c'];
let array_2 = ["x","y","z"];

function merge_arrays(one, two) {
  let result = {};
  one.forEach((key, i) => result[key] = two[i]);
  console.log(result);
}

merge_arrays(array_1, array_2);

// Given an object with keys and values, create two arrays: one which contains the object's keys,
// and one which contains the object's values. Wrap this into a function which takes in one object
// that contains keys and values, and returns a different object that contains two keys. The first key
// should be named "keys" and will have the first array as a value. The second key should be named
// "values" and will have the second array as a value.
// examples:
// { exciting: "markets", exotic: "britain" } --> { keys: ["exciting", "exotic"], values: ["markets", "britain"] }
// { a: "x", b: "y", c: "z" } --> { keys: ["a", "b", "c"], values: ["x", "y", "z"] }

let object = {
  exciting: "markets",
  exotic: "britain"
}

let keys = [];
let values = [];

for (key in object) {

  keys.push(key);

  if(object.hasOwnProperty(key)) {
      let value = object[key];
      values.push(value);
  }
}

function Constructor(keys, values) {
    this.keys = keys;
    this.values = values;
}

var example = new Constructor(keys, values);

console.log(example);

// OPTIONAL CHALLENGE 1
// write a function that takes in two parameters, x and n, and computes x to the nth power
// you may not use Math.* functions

function to_the_power(x,n) {

let number = 0;

  for(i=0;i<n;i++){

    if (number == 0) {
      number = x * 1;
    } else {
      number = number * x;
    }
  }
return number;
}

to_the_power(4,4);


// OPTIONAL CHALLENGE 2
// Jon has terrible social anxiety, and wishes to sit as far away from everyone as possible.
// Given an array of booleans, where the array represents a row of seated people, and each
// boolean represents whether the seat is occupied or not, find the ideal seat for Jon.

let seated = [true, true, true, false, true, true, true, false, true];

let free_seats = [];

let length_of_row = seated.length;

for (i=0; i<seated.length; i++){
  if(seated[i] == true){
    console.log('taken: ' + (i+1));
  } else {
    console.log('free: ' + (i+1));
    free_seats.push(i+1);
  }
}

console.log(free_seats);

let array_of_distances = [];

//Calculate distance from 0 and from the last number in the length_of_row
for (i=0; i<free_seats.length;i++){
  let distance_from_left_side = free_seats[i]-1;
  array_of_distances.push(distance_from_left_side);
  let distance_from_right_side = length_of_row-free_seats[i];
  array_of_distances.push(distance_from_right_side);
}

console.log(array_of_distances);

//Find the lowest value in the newly created array
let min_of_array = Math.min.apply(Math, array_of_distances);
console.log(min_of_array);

//Get the index in the array "array_of_distances" that contains the lowest value
let index_lowest_value = (array_of_distances.findIndex(lowest_value => lowest_value == min_of_array)) + 1;
console.log(index_lowest_value);

//Find the correct corresponding index of "free seats"
let correct_index_free_seats = Math.floor(index_lowest_value / 2);
console.log(correct_index_free_seats);

console.log('Jon should go sit at seat: ' + free_seats[correct_index_free_seats-1]);
