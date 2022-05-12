const randNum = require('./randomInt');

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
  let randomFirst = randNum(firstName);
  let randomLast = randNum(lastName);

  return rand = randomFirst + " " + randomLast;
}


module.exports =  randomName;