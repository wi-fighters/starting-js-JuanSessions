// - Proper indentation

// Good luck!

console.log(getFortune()); // here in the begining makes use of hoisting

function randomElementPicker(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function getFortune() {
  const jobs = [
    "an assistant teacher",
    "a teacher who teaches teachers",
    "the village computer whisperer",
    "a space raider",
    "a camel herder for undercover superheroes",
    "a mountaineer",
    "a house servant for a robot",
    "---pfft work? You've been devoting your life to your passion of miniature crochet"
  ];
  const places = [
    "Berlin",
    "some tiny island paradise",
    "wherever semicolons and socks run off to hide",
    "some hectic cool space city we haven't yet discovered",
    "the mountains of cyborgtopia",
    "that place where you used to hang out in a video game",
    "some stupidly gorgeous coastal town",
    "the ruins of former Berlin"
  ];
  const job = randomElementPicker(jobs);
  const place = randomElementPicker(places);
  return `You'll be celebrating 100 000 GitHub stars on your side project, in the heart of ${place} where you've been working as ${job}!`;
}