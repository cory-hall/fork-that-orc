const { Weapon } = require('../models');

const postdata = [
    {
        armor_name: 'Heavy Chainmail',
        armor_class: 'Warrior'
    },
    {
        armor_name: 'Iron Plate',
        armor_class: 'Warrior'
    },
    {
        armor_name: 'Enchanted Robe',
        armor_class: 'Mage'
    },
    {
        armor_name: 'Blessed Cloak',
        armor_class: 'Mage'
    },
    {
        armor_name: 'Hide Clothes',
        armor_class: 'Rogue'
    },
    {
        armor_name: 'Leather Armor',
        armor_class: 'Rogue'
    }
];

const seedArmors = () => Post.bulkCreate(postdata);

module.export = seedArmors;