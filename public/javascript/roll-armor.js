const randomInt = require('../../utils/random-number')
const { Armor } = require('../../models');

function findArmor() {
  const select = document.querySelector('#class-select');
  const text = select.options[select.selectedIndex].text;

  Armor.findAll({
    where: {
      armor_class: text
    }
  })
  .then(armorDbData => {
    const armor = armorDbData.map(armor => armor.get({ plain : true }));
    const index = randomInt(armor);

    return index;
  })
}
