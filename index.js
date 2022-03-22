function simulateEvent(numEvents) {
  var event = Math.floor(numEvents * Math.random());
  return event;
}
// simulate fair die
console.log("Rolled a " + (simulateEvent(6) + 1));

function simulateEvent2(chances) {
  var sum = 0;
  chances.forEach(function (chance) {
    sum += chance;
  });
  var rand = Math.random();
  var chance = 0;
  for (var i = 0; i < chances.length; i++) {
    chance += chances[i] / sum;
    if (rand < chance) {
      return i;
    }
  }
  // should never be reached unless sum of probabilities is less than 1 // due to all being zero or some being negative probabilities
  return -1;
}
// simulate weighted dice where 6 is twice as likely as any other face
// using multiples of likelihood
console.log("Rolled a " + (simulateEvent2([1, 1, 1, 1, 1, 2]) + 1));
// using probabilities
console.log(
  "Rolled a " + (simulateEvent2([1 / 7, 1 / 7, 1 / 7, 1 / 7, 1 / 7, 2 / 7]) + 1)
);

var rewards = ["gold coin", "silver coin", "diamond", "god sword"];
var likelihoods = [5, 9, 1, 0];
// least likely to get a god sword (0/15 = 0%, never),
// most likely to get a silver coin (9/15 = 60%, more than half the time)
// simulate event, log reward
console.log("You get a " + rewards[simulateEvent2(likelihoods)]);
