const randomInt = require('../../utils/random-number')
const { Weapon } = require('../../models');

function findWeapon() {
  const select = document.querySelector('#class-select');
  const text = select.options[select.selectedIndex].text;

  Weapon.findAll({
    where: {
      armor_class: text
    }
  })
  .then(weaponDbData => {
    const weapon = weaponDbData.map(weapon => weapon.get({ plain : true }));
    const index = randomInt(weapon);

    const foundArmor = armor.armor_name[index]

    return foundArmor;
  })
}

module.exports = { findWeapon };