const randomInt = require('./randomInt');

const firstName = [
  'The Butcher',
  'Garrosh',
  'Austin'
]

const lastName = [
  "of Blaviken",
  'Hellscream',
  'Carter'
]

// function randomName(firstName, lastName) {
//   let randomFirst = randNum(firstName);
//   let randomLast = randNum(lastName);

//   return randomFirst + " " + randomLast;
// }

const randomName = () => {
  const randomFirst = firstName[randomInt(firstName)];
  const randomLast = lastName[randomInt(lastName)];

  return randomFirst + " " + randomLast;
}


module.exports =  randomName;