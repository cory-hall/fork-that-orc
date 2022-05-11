const { Weapon } = require('../models');

const weapondata = [
    {
        weapon_name: 'Heavy Broadsword',
        weapon_class: 'Warrior'
    },
    {
        weapon_name: 'Battle Axe',
        weapon_class: 'Warrior'
    },
    {
        weapon_name: 'Spell Book',
        weapon_class: 'Mage'
    },
    {
        weapon_name: 'Staff of Flames',
        weapon_class: 'Mage'
    },
    {
        weapon_name: 'Silver Dagger',
        weapon_class: 'Rogue'
    },
    {
        weapon_name: 'Longbow',
        weapon_class: 'Rogue'
    }
];

const seedWeapons = () => Weapon.bulkCreate(weapondata);

module.export = seedWeapons;