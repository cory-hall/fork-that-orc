const randomInt = require('../../utils/random-number');
const { Weapon } = require('../../models');

function findWeapon() {
    const select = document.querySelector('#class-select');
    const text = select.options[select.selectedIndex].text;

    Weapon.findAll({
        where: {
            weapon_class: text
        }
    })
    .then(weaponDbData => {
        const weapon = weaponDbData.map(weapon => weapon.get({ plain: true }));
        const index = randomInt(weapon);

        const foundWeapon = weapon.weapon_name[index];

        return foundWeapon;
    })
}

module.exports = { foundWeapon };

