const { Armors } = require('../models');

const armordata = [
    {
        armor_name: 'Heavy Chainmail',
        armor_class: 'Warrior',
        armor_rating: 10
    },
    {
        armor_name: 'Iron Plate',
        armor_class: 'Warrior',
        armor_rating: 8
    },
    {
        armor_name: 'Enchanted Robe',
        armor_class: 'Mage',
        armor_rating: 7
    },
    {
        armor_name: 'Blessed Cloak',
        armor_class: 'Mage',
        armor_rating: 6
    },
    {
        armor_name: 'Hide Clothes',
        armor_class: 'Rogue',
        armor_rating: 3
    },
    {
        armor_name: 'Leather Armor',
        armor_class: 'Rogue',
        armor_rating: 4
    }
];

const seedArmors = () => Armors.bulkCreate(armordata);

module.exports = seedArmors;