const router = require('express').Router();
const db = require('../../config/connection');
const { Armors, Character, Weapons } = require('../../models');

let wep_id;
let arm_id;

router.get('/', (req, res) => {
    Character.findAll({})
    .then(dbData => res.json(dbData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.post('/', (req, res) => {
    // Weapons.findAll({
    //     limit: 1,
    //     order: [['id', 'DESC']]
    // })
    // .then(dbData => (console.log(dbData.id)))

    // Armors.findAll({
    //     limit: 1,
    //     order: [['id', 'DESC']]
    // })
    // .then(dbData => (arm_id = dbData.id))
    // .then(console.log(arm_id))
    Character.create({
        character_name: req.body.character_name,
        character_class: req.body.character_class,
        health: req.body.health,
        mana: req.body.mana,
        strength: req.body.strength,
        dexterity: req.body.dexterity,
        intelligence: req.body.intelligence,
    })
        .then(userData =>  res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});
// create character
// router.post('/', (req, res) => {
//     Weapons.findAll({
//         limit: 1,
//         order: [['id', 'DESC']]
//     })
//         .then(dbData => wep_id = dbData.id)
//         .then(Armors.findAll({
//             limit: 1,
//             order: [['id', 'DESC']]
//         }))
//         .then(dbData => arm_id = dbData.id)
//         .then(Character.create({
//             character_name: req.body.character_name,
//             character_class: req.body.character_class,
//             health: req.body.health,
//             mana: req.body.mana,
//             strength: req.body.strength,
//             dexterity: req.body.dexterity,
//             intelligence: req.body.intelligence,
//             character_weapon: wep_id,
//             character_armor: arm_id
//         }))
//         .then(userData => {
//             res.json(userData)
//                 .catch(err => {
//                     console.log(err);
//                     res.status(500).json(err);
//                 });
//         });
// });

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