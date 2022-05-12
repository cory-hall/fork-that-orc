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

  const healthCard = document.querySelector('#health');
  const manaCard = document.querySelector('#mana');
  const strCard = document.querySelector('#strength');
  const dexCard = document.querySelector('#dexterity');
  const intCard = document.querySelector('#intelligence');
  const charClass = document.querySelector('#charclass').value;

  switch (charClass) {
    case 'warrior':
      var health = randomInt(100) + 50;
      const mana = randomInt(100);
      const str = randomInt(10) + 10;
      const dex = randomInt(10) + 5;
      const int = randomInt(10);
      break;
    default:
      break;
  };

  const healthChild = document.createElement("p")
  healthCard.append(healthChild);
  healthChild.innerHTML = health;
}

document.querySelector('.name-btn').addEventListener('click', randomNameHandler);
document.querySelector('.roll-char').addEventListener('click', rollCharacterHandler);

