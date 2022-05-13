
// global name arrays
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

const warriorWeapon = [
  {
    name: "Steel Axe",
    rating: "5"
  },
  {
    name: "Dragontooth Hammer",
    rating: "10"
  }
];

const warriorArmor = [
  {
    name: "Iron Armor",
    rating: 4
  },
  {
    name: "Dragonscale Armor",
    rating: 10
  }
];

const rogueWeapon = [
  {
    name: "Iron Dagger",
    rating: 4
  },
  {
    name: "Corehound Tooth",
    rating: 10
  }
];

const rogueArmor = [
  {
    name: "Leather Armor",
    rating: 3
  },
  {
    name: "Gilded Armor",
    rating: 10
  }
];

const mageWeapon = [
  {
    name: "First Staff",
    rating: 6
  },
  {
    name: "Wabbajack",
    rating: 10
  }
];

const mageArmor = [
  {
    name: "Wizard Robes",
    rating: 4
  },
  {
    name: "Enchanted Robes",
    rating: 10
  }
]

let statObj = {};

// function to return a random name from both name arrays
// by using the randomInt function
function randomName() {

  const randomFirst = firstName[randomInt(firstName.length)];
  const randomLast = lastName[randomInt(lastName.length)];

  return randomFirst + " " + randomLast;
};

// simply returns a 'random' number
function randomInt(num) {
  return Math.floor(Math.random() * num);
};

// this function places a random name in the text area on the document
const randomNameHandler = (event) => {
  event.preventDefault();

  const nameArea = document.querySelector('input[name="charname"]');

  const name = randomName();

  nameArea.value = name;
};

const randomWepHandler = (event) => {
  event.preventDefault();

  const wepNameArea = document.querySelector('input[name="wepname"]');
  const wepRatingArea = document.querySelector('input[name="weprating"]');
  const charClass = document.querySelector('#charclass').value;

  switch (charClass) {
    case "warrior":
      var weapon = warriorWeapon[randomInt(warriorWeapon.length)];
      wepNameArea.value = weapon.name;
      wepRatingArea.value = weapon.rating;
      break;
    case "rogue":
      var weapon = rogueWeapon[randomInt(rogueWeapon.length)];
      wepNameArea.value = weapon.name;
      wepRatingArea.value = weapon.rating;
      break;
    case "mage":
      var weapon = mageWeapon[randomInt(mageWeapon.length)];
      wepNameArea.value = weapon.name;
      wepRatingArea.value = weapon.rating;
      break;
    default:
      break;
  }
};

const randomArmHandler = (event) => {
  event.preventDefault();

  const armNameArea = document.querySelector('input[name="armname"]');
  const armRatingArea = document.querySelector('input[name="armrating"]');
  const charClass = document.querySelector('#charclass').value;

  switch (charClass) {
    case "warrior":
      var armor = warriorArmor[randomInt(warriorArmor.length)];
      armNameArea.value = armor.name;
      armRatingArea.value = armor.rating;
      break;
    case "rogue":
      var armor = rogueArmor[randomInt(rogueArmor.length)];
      armNameArea.value = armor.name;
      armRatingArea.value = armor.rating;
      break;
    case "mage":
      var armor = mageArmor[randomInt(mageArmor.length)];
      armNameArea.value = armor.name;
      armRatingArea.value = armor.rating;
      break;
    default:
      break;
  }
}


// this function is called on each char randomize and clears the populated 
// stat fields
function clearFields() {
  const healthCard = document.querySelector('#health');
  const manaCard = document.querySelector('#mana');
  const strCard = document.querySelector('#strength');
  const dexCard = document.querySelector('#dexterity');
  const intCard = document.querySelector('#intelligence');
  const wepCard = document.querySelector('#weapon');
  const armCard = document.querySelector('#armor');

  const healthChild = healthCard.getElementsByTagName('p')[1];
  const manaChild = manaCard.getElementsByTagName('p')[1];
  const strChild = strCard.getElementsByTagName('p')[1];
  const dexChild = dexCard.getElementsByTagName('p')[1];
  const intChild = intCard.getElementsByTagName('p')[1];
  const wepNameChild = wepCard.getElementsByTagName('p')[0];
  const wepRatingChild = wepCard.getElementsByTagName('p')[1];
  const armNameChild = armCard.getElementsByTagName('p')[0];
  const armRatingChild = armCard.getElementsByTagName('p')[1];

  if (healthChild && manaChild && strChild && dexChild && intChild) {
    healthCard.removeChild(healthChild);
    manaCard.removeChild(manaChild);
    strCard.removeChild(strChild);
    dexCard.removeChild(dexChild);
    intCard.removeChild(intChild);
    wepCard.removeChild(wepNameChild);
    wepCard.removeChild(wepRatingChild);
    armCard.removeChild(armNameChild);
    armCard.removeChild(armRatingChild);
  }
}

// this function generates the stat rolls
const rollStatHandler = (event) => {
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
      break;
    case 'rogue':
      var health = randomInt(100) + 25;
      var mana = randomInt(100) + 25;
      var str = randomInt(10) + 5;
      var dex = randomInt(10) + 5;
      var int = randomInt(10) + 5;
      break;
    case 'mage':
      var health = randomInt(100);
      var mana = randomInt(100) + 50;
      var str = randomInt(10);
      var dex = randomInt(10) + 5;
      var int = randomInt(10) + 10;
      break;
    default:
      break;
  };

  statObj = {
    charClass: charClass,
    health: health,
    mana: mana,
    str: str,
    dex: dex,
    int: int
  };

  const healthChild = document.createElement("p");
  const manaChild = document.createElement("p");
  const strChild = document.createElement("p");
  const dexChild = document.createElement("p");
  const intChild = document.createElement("p");

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

  rollGear(statObj);
};

function rollGear(statObj) {
  const charClass = statObj.charClass;

  var { weapon, armor } = chooseGear(charClass);

  statObj = {
    weapon: weapon,
    armor: armor
  }
}



function chooseGear(string) {
  if (string === "warrior") {
    var weapon = warriorWeapon[randomInt(warriorWeapon.length)];
    var armor = warriorArmor[randomInt(warriorArmor.length)];
  } else if (string === "rogue") {
    var weapon = rogueWeapon[randomInt(rogueWeapon.length)];
    var armor = rogueArmor[randomInt(rogueArmor.length)];
  } else {
    var weapon = mageWeapon[randomInt(mageWeapon.length)];
    var armor = mageArmor[randomInt(mageArmor.length)];
  }

  return { weapon, armor };
}

document.querySelector('.name-btn').addEventListener('click', randomNameHandler);
document.querySelector('.roll-char').addEventListener('click', rollStatHandler);
document.querySelector('.wep-btn').addEventListener('click', randomWepHandler);
document.querySelector('.arm-btn').addEventListener('click', randomArmHandler);

