// required library
var Roll = require('roll'),
  roll = new Roll();


// required imported data
var { firstName, lastName } = require('./name-arrays');
var { warriorWeapon, rogueWeapon, mageWeapon } = require('./weapon-arrays');
var { warriorArmor, rogueArmor, mageArmor } = require('./armor-arrays');

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

// picks a random weapon from the class appropriate weapon array
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

// picks a random armor from the class appropriate armor array
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

// generates the  character stat rolls
const rollStatHandler = (event) => {
  event.preventDefault();

  const healthField = document.querySelector('input[name="health"]');
  const manaField = document.querySelector('input[name="mana"]');
  const strField = document.querySelector('input[name="str"]');
  const dexField = document.querySelector('input[name="dex"]');
  const intField = document.querySelector('input[name="int"]');
  const charClass = document.querySelector('#charclass').value;

  switch (charClass) {
    case 'warrior':
      var health = roll.roll('d%').result + 50;
      var mana = roll.roll('d%').result;
      var str = roll.roll('2d6').result + 10;
      var dex = roll.roll('d6').result + 5;
      var int = roll.roll('d6').result;
      break;
    case 'rogue':
      var health = roll.roll('d%').result + 25;
      var mana = roll.roll('d%').result + 25;
      var str = roll.roll('2d6').result + 5;
      var dex = roll.roll('2d6').result + 5;
      var int = roll.roll('2d6').result + 5;
      break;
    case 'mage':
      var health = roll.roll('d%').result;
      var mana = roll.roll('d%').result + 50;
      var str = roll.roll('2d6').result;
      var dex = roll.roll('2d6').result + 5;
      var int = roll.roll('2d6').result + 10;
      break;
    default:
      break;
  };

  healthField.value = health;
  manaField.value = mana;
  strField.value = str;
  dexField.value = dex;
  intField.value = int;
};

// function to add the weapon, armor, and character to the database


document.querySelector('.name-btn').addEventListener('click', randomNameHandler);
document.querySelector('.roll-char').addEventListener('click', rollStatHandler);
document.querySelector('.wep-btn').addEventListener('click', randomWepHandler);
document.querySelector('.arm-btn').addEventListener('click', randomArmHandler);

