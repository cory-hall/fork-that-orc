const randomInt = require('../../utils/random-number');
const { Consumable } = require('../../models');

function findConsumable() {
    const select = document.querySelector('#class-select');
    const text = select.options[select.selectedIndex].text;

    Consumable.findAll({
        where: {
            consumable_class: text
        }
    })
    .then(consumableDbData => {
        const consumable = consumableDbData.map(consumable => consumable.get({ plain: true }));
        const index = randomInt(consumable);

        const foundConsumable = consumable.consumable_name[index];

        return foundConsumable;
    })
}

module.exports = { foundConsumable };