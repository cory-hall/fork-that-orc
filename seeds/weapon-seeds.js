const { Weapons } = require('../models');

const weapondata = [
    {
        weapon_name: 'Heavy Broadsword',
        weapon_class: 'Warrior',
        weapon_rating: 8
    },
    {
        weapon_name: 'Battle Axe',
        weapon_class: 'Warrior',
        weapon_rating: 10
    },
    {
        weapon_name: 'Spell Book',
        weapon_class: 'Mage',
        weapon_rating: 6
    },
    {
        weapon_name: 'Staff of Flames',
        weapon_class: 'Mage',
        weapon_rating: 7
    },
    {
        weapon_name: 'Silver Dagger',
        weapon_class: 'Rogue',
        weapon_rating: 4
    },
    {
        weapon_name: 'Longbow',
        weapon_class: 'Rogue',
        weapon_rating: 3
    }
];

const seedWeapons = () => Weapons.bulkCreate(weapondata);

module.export = seedWeapons;