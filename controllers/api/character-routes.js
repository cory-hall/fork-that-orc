const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Armor, Character, Consumables, Inventory, User, Weapons } = require('../../models');

module.exports = router;





// create character
router.post('/', (req, res) => {
    Character.create({

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
    Character.findAll({

    })
    .then(userData => {
        res.json(userData)
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    })
})

// get one character from user
router.get('/:id', (req, res) => {
    Character.findOne({

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

    })
    .then(userData => {
        res.json(userData)
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    })
})

