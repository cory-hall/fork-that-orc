const { Weapons } = require('../models');

const weapondata = [
    {
        weapon_name: 'Heavy Broadsword',
        weapon_class: 'Warrior',
        weapon_rating: 8,
        weapon_image: 'https://i.imgur.com/YwzB5Bj.png'
    },
    {
        weapon_name: 'Battle Axe',
        weapon_class: 'Warrior',
        weapon_rating: 10,
        weapon_image: 'https://i.imgur.com/SQk8c1o.png'
    },
    {
        weapon_name: 'Staff of War',
        weapon_class: 'Mage',
        weapon_rating: 6,
        weapon_image: 'https://i.imgur.com/XwcyJsh.png'
    },
    {
        weapon_name: 'Staff of Healing',
        weapon_class: 'Mage',
        weapon_rating: 7,
        weapon_image: 'https://i.imgur.com/Q5t9cu2.png'
    },
    {
        weapon_name: 'Silver Dagger',
        weapon_class: 'Rogue',
        weapon_rating: 4,
        weapon_image: 'https://i.imgur.com/4bwrtd7.png'
    },
    {
        weapon_name: 'Longbow',
        weapon_class: 'Rogue',
        weapon_rating: 3,
        weapon_image: 'https://i.imgur.com/BekRLeT.png'
    }
];

const seedWeapons = () => Weapons.bulkCreate(weapondata);

module.exports = seedWeapons;