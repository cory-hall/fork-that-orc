const firstName = [
  'The Butcher',
  'Garrosh',
  'Austin'
];

const lastName = [
  "of Blaviken",
  'Hellscream',
  'Carter'
];

function randomName() {

  const randomFirst = firstName[randomInt(firstName.length)];
  const randomLast = lastName[randomInt(lastName.length)];

  return randomFirst + " " + randomLast;
}

function randomInt(num) {
  return Math.floor(Math.random() * num);
};


const randomNameHandler = (event) => {
  event.preventDefault();

  const nameArea = document.querySelector('input[name="charname"]');

  const name = randomName();

  nameArea.value = name;
  console.log(name)
}

const rollCharacterHandler = (event) => {
  event.preventDefault();


}

document.querySelector('.name-btn').addEventListener('click', randomNameHandler);

