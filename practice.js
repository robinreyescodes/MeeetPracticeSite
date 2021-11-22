"use strict";

const robin = "Robin Reyes";

//works kind of like an array
console.log(robin[2]);

//indexOf
console.log(robin.indexOf("z")); //-1 means it does not exist

//slice method
console.log(robin.slice(1)); //new string
console.log(robin); // does not mess with the old, original string

console.log(robin.slice(2, robin.indexOf("s")).toUpperCase());
console.log(robin.slice(1, 7).toLowerCase());

console.log("---------------------------");

//airplane seat function
const checkMiddleSeat = (seat) => {
  if (seat.slice(-1) === "B" || seat.slice(-1) === "E")
    console.log("you have a middle seat");
  else console.log("you do not have a middle seat");
};

checkMiddleSeat("123uksjdfkdsjB");
checkMiddleSeat("1jkEf");

const hello = "hello";
const checkIfItsThere = (word) => {
  if (word.includes("hello")) {
    console.log(`oh hi there, wasn't expecting you say to hello!`);
  }
  if (word.includes("Robin")) console.log(word.replace("Robin", "Bitch"));

  if (word.startsWith("hello")) console.log("you are poo");
};

checkIfItsThere("hello my name is Robin");
