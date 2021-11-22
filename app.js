const airline = "TAP Air Portugal";
const plane = "A320";
// console.log(plane[0]);
// console.log("B737"[0]);
// console.log(airline.length);
// console.log(airline.indexOf("A"));

//first parameter, is the begin...where the extraction starts
console.log(airline.slice(4, 7)); // returns sub string; does not mutate original

// console.log(airline.slice(0, airline.indexOf(" ")));

// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

//find if seat is middle or not

// const checkMidSeat = (seat) => {
//   //B and E are middle seats... ABC   DEF
//   const letter = seat.slice(-1);
//   letter === "B" || letter === "E" ? console.log("middle") : console.log("no");
// };
// checkMidSeat("11B"); // format of airplane seat
// checkMidSeat("23C");
// checkMidSeat("3E");

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

const editName = (name) => {
  const nameLower = name.toLowerCase();
  const nameCorrect = name[0].toUpperCase() + nameLower.slice(1);
  console.log(nameCorrect);
};

editName("rOBin");
editName("LoViNG");

//comparing user emails
const email = "hello@robin.io";
const loginEmail = "   Hello@robin.Io \n";
//below is the longer way of doing it
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

const compareEmails = (email, givenEmail) => {
  return email === givenEmail;
};
console.log(compareEmails(email, normalizedEmail));

//replacing things in a string
const priceGB = "288,82€";
const priceUS = priceGB.replace("€", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23";
// console.log(announcement.replace("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

//booleans
const plane2 = "Airbus A320neo";
console.log(plane2.includes("A320"));
console.log(plane2.includes("boeing"));
console.log(plane2.startsWith("Air"));

if (plane2.startsWith("Airbus") && plane2.endsWith("neo")) {
  console.log("Part of the new airbus family");
}

//practice exercise
//check if baggage of passenger is checkinable or not
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun"))
    console.log("you are not allowed");
  else console.log("welcome aboard");
};
checkBaggage("I have a laptop, some Foof and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
