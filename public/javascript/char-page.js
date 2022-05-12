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
};

function randomInt(num) {
  return Math.floor(Math.random() * num);
};

function clearFields() {
  const healthCard = document.querySelector('#health');
  const manaCard = document.querySelector('#mana');
  const strCard = document.querySelector('#strength');
  const dexCard = document.querySelector('#dexterity');
  const intCard = document.querySelector('#intelligence');

  const healthChild = healthCard.getElementsByTagName('p')[1];
  const manaChild = manaCard.getElementsByTagName('p')[1];
  const strChild = strCard.getElementsByTagName('p')[1];
  const dexChild = dexCard.getElementsByTagName('p')[1];
  const intChild = intCard.getElementsByTagName('p')[1];

  if (healthChild && manaChild && strChild && dexChild && intChild) {
    healthCard.removeChild(healthChild);
    manaCard.removeChild(manaChild);
    strCard.removeChild(strChild);
    dexCard.removeChild(dexChild);
    intCard.removeChild(intChild);
  }
}


const randomNameHandler = (event) => {
  event.preventDefault();

  const nameArea = document.querySelector('input[name="charname"]');

  const name = randomName();

  nameArea.value = name;
  console.log(name)
};


const rollCharacterHandler = (event) => {
  event.preventDefault();

  clearFields();

  const healthCard = document.querySelector('#health');
  const manaCard = document.querySelector('#mana');
  const strCard = document.querySelector('#strength');
  const dexCard = document.querySelector('#dexterity');
  const intCard = document.querySelector('#intelligence');
  const charClass = document.querySelector('#charclass').value;

  switch (charClass) {
    case 'warrior':
      var health = randomInt(100) + 50;
      var mana = randomInt(100);
      var str = randomInt(10) + 10;
      var dex = randomInt(10) + 5;
      var int = randomInt(10);
      console.log('warrior');
      break;
    case 'rogue':
      var health = randomInt(100) + 25;
      var mana = randomInt(100) + 25;
      var str = randomInt(10) + 5;
      var dex = randomInt(10) + 5;
      var int = randomInt(10) + 5;
      console.log('rogue');
      break;
    case 'mage':
      var health = randomInt(100);
      var mana = randomInt(100) + 50;
      var str = randomInt(10);
      var dex = randomInt(10) + 5;
      var int = randomInt(10) + 10;
      console.log('mage');
      break;
    default:
      break;
  };

  const healthChild = document.createElement("p");
  const manaChild = document.createElement("p")
  const strChild = document.createElement("p")
  const dexChild = document.createElement("p")
  const intChild = document.createElement("p")

  healthCard.append(healthChild);
  manaCard.append(manaChild);
  strCard.append(strChild);
  dexCard.append(dexChild);
  intCard.append(intChild);

  healthChild.innerHTML = health;
  manaChild.innerHTML = mana;
  strChild.innerHTML = str;
  dexChild.innerHTML = dex;
  intChild.innerHTML = int;
}

document.querySelector('.name-btn').addEventListener('click', randomNameHandler);
document.querySelector('.roll-char').addEventListener('click', rollCharacterHandler);

