const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Armors, Character, Consumables, Inventory, User, Weapons } = require('../../models');

// create character
router.post('/', (req, res) => {
    Character.create({
        character_name: req.body.character_name,
        character_class: req.body.character_class,
        health: req.body.health,
        mana: req.body.mana,
        strength: req.body.strength,
        dexterity: req.body.strength,
        intelligence: req.body.intelligence,
        character_weapon: req.body.character_weapon,
        character_armor: req.body.character_armor
    })
    .then(userData => {
        res.json(userData)
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    })
})

// get all characters from user
router.get('/', (req, res) => {
    Character.findAll({})
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    }); 
});


// get one character from user
router.get('/:id', (req, res) => {
    Character.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        res.json(userData)
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    })
})

// update character trait
router.put('/', (req, res) => {
    Character.update({
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        res.json(userData)
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    })
})

// delete character
router.delete('/:id', (req, res) => {
    Character.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        res.json(userData)
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    })
})

module.exports = router;