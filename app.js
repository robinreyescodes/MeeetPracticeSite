const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

let container = gameEvents.values(); // grabs all the values from gaemEvents
const events = [...new Set(container)]; //creates the array, gets the set of non duplicates
console.log(events); // returns the array

for (const [time, event] of gameEvents.entries()) {
  let half = time < 45 ? "first" : "second";
  console.log(`[${half} half] ${time}: ${event} `);
}
