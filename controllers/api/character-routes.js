const router = require('express').Router();
const db = require('../../config/connection');
const { Armors, Character, Weapons } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    Character.findAll({})
        .then(dbData => res.json(dbData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    Character.findAll({
        where: {
            id: req.params.id
        }
    })
        .then(dbData => res.json(dbData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', (req, res) => {
    Character.create({
        character_name: req.body.character_name,
        character_class: req.body.character_class,
        health: req.body.health,
        mana: req.body.mana,
        strength: req.body.strength,
        dexterity: req.body.dexterity,
        intelligence: req.body.intelligence,
        weapon_id: sequelize.literal('(SELECT id FROM weapon ORDER BY ID DESC LIMIT 1)'),
        armor_id: sequelize.literal('(SELECT id FROM armor ORDER BY ID DESC LIMIT 1)'),
        user_id: req.session.user_id
    })

        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Character.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbData => {
        if (!dbData) {
            res.status(404).json({ message: 'No character found with this id' });
            return;
        }
        res.json(dbData)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;