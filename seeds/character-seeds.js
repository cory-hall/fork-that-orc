const { Character } = require('../models')

const characterdata = [
    {
        character_name: 'Jimmy Thiccus',
        character_class: 'Warrior',
        health: '69',
        mana: '100',
        strength: '25',
        dexterity: '50',
        intelligence: '10',
        character_weapon: 1,
        character_armor: 2
    },
    {
        character_name: 'Cory Carter',
        character_class: 'Mage',
        health: '420',
        mana: '1000',
        strength: '40',
        dexterity: '10',
        intelligence: '100',
        character_weapon: 4,
        character_armor: 3
    },
    {
        character_name: 'Hughest Flock',
        character_class: 'Warrior',
        health: '1000',
        mana: '50',
        strength: '500',
        dexterity: '100',
        intelligence: '5',
        character_weapon: 2,
        character_armor: 1
    },
    {
        character_name: 'Imma Tella',
        character_class: 'Rogue',
        health: '70',
        mana: '40',
        strength: '100',
        dexterity: '1000',
        intelligence: '900000',
        character_weapon: 5,
        character_armor: 5
    },
    {
        character_name: 'Peachy Beach',
        character_class: 'Warrior',
        health: '90',
        mana: '30',
        strength: '70',
        dexterity: '100',
        intelligence: '2',
        character_weapon: 1,
        character_armor: 2 
    },
    {
        character_name: 'Hella Bella',
        character_class: 'Mage',
        health: '80',
        mana: '50',
        strength: '30',
        dexterity: '20',
        intelligence: '400',
        character_weapon: 3,
        character_armor: 4
    }
];

const seedCharacter = () => Character.bulkCreate(characterdata);

module.exports = seedCharacter;