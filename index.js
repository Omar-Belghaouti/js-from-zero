const AnimalSays = {
  dog() {
    return "woof";
  },
  cat() {
    return "meow";
  },
  lion() {
    return "roar";
  },
  // ... other animals
  default() {
    return "moo";
  },
};

function makeAnimalSpeak(animal) {
  // Match the animal by type
  const speak = AnimalSays[animal] || AnimalSays.default;
  console.log(animal + " says " + speak());
}

makeAnimalSpeak("dog"); // => 'dog says woof'
makeAnimalSpeak("cat"); // => 'cat says meow'
makeAnimalSpeak("lion"); // => 'lion says roar'
makeAnimalSpeak("snake"); // => 'snake says moo'
