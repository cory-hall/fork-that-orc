const router = require('express').Router();
const { Character } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// GET all characters
router.get('/', (req, res) => {
    Character.findAll({
        attributes: [
            'id',
            'character_name',
            'character_class',
            'health',
            'mana',
            'strength',
            'dexterity',
            'intelligence',
            'weapon_id',
            'armor_id',
            // TODO
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE hero.id = vote.hero_id)'), 'vote_count']
        ]
    })
        .then(dbData => res.json(dbData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// GET a character based on `id` value
router.get('/:id', (req, res) => {
    Character.findAll({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'character_name',
            'character_class',
            'health',
            'mana',
            'strength',
            'dexterity',
            'intelligence',
            'weapon_id',
            'armor_id',
            // TODO
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE hero.id = hero.post_id)'), 'vote_count']
        ]
    })
        .then(dbData => res.json(dbData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// POST to create a new character
router.post('/', withAuth, (req, res) => {
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

// PUT to update character
router.put('/:id', withAuth, (req, res) => {
    Character.update(
       {
          character_name: req.body.character_name
       },
       {
          where: {
             id: req.params.id
          }
       }
    )
       .then(dbData => {
          if (!dbData) {
             res.status(404).json({ message: 'No Hero found with this id' });
             return;
          }
          res.json(dbData);
       })
       .catch(err => {
          console.log(err);
          res.status(500).json(err);
       });
 });

 // DELETE a character based on `id` value
router.delete('/:id', withAuth, (req, res) => {
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