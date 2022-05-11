const { Consumable } = require('../models');

const consumabledata = [
    {
        consumable_name: 'Health Potion',
        consumable_class: 'Common',
        consumable_effect: 'Heals for 5HP'
    },
    {
        consumable_name: 'Super Health Potion',
        consumable_class: 'Rare',
        consumable_effect: 'Heals for 69HP'
    },
    {
        consumable_name: 'Mana Potion',
        consumable_class: 'Common',
        consumable_effect: 'Restores 10MP'
    },
    {
        consumable_name: 'Super Mana Potion',
        consumable_class: 'Rare',
        consumable_effect: 'Restores 69MP'
    },
    {
        consumable_name: 'Haste Potion',
        consumable_class: 'Common',
        consumable_effect: 'Gain 5m/s'
    },
    {
        consumable_name: 'Literally the flash',
        consumable_class: 'Exceedingly Rare',
        consumable_effect: 'Wanna see me do it again?'
    }
];

const seedConsumables = () => Consumable.bulkCreate(consumabledata);

module.exports = seedConsumables;