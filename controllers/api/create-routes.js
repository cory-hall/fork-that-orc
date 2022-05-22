const router = require('express').Router();
const { Weapons, Armors, Character } = require('../../models');
const withAuth = require('../../utils/auth');

var wepId;
var armId;

// POST to create a new weapon
router.post('/weapon', withAuth, (req, res) => {
  if (req.session) {
    // expects {"weapon_name": "Sword", "weapon_class": "Warrior", "weapon_rating": "8"
    Weapons.create({
      weapon_name: req.body.weapon_name,
      weapon_class: req.body.weapon_class,
      weapon_rating: req.body.weapon_rating,
      // TODO
      // weapon_image: req.body.weapon_image
    })
      .then(dbData => {
        wepId = dbData.id;
        res.json(dbData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      })
  }
})

// POST to create a new armor
router.post('/armor', withAuth, (req, res) => {
  if (req.session) {
    // expects {"armor_name": "Plate Armor", "armor_class": "Warrior", "armor_rating": "8"
    Armors.create({
      armor_name: req.body.armor_name,
      armor_class: req.body.armor_class,
      armor_rating: req.body.armor_rating
    })
      .then(dbData => {
        armId = dbData.id
        res.json(dbData)
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      })
  }
})

// POST to create a new character
router.post('/char', withAuth, (req, res) => {
  Character.create({
    character_name: req.body.character_name,
    character_class: req.body.character_class,
    health: req.body.health,
    mana: req.body.mana,
    strength: req.body.strength,
    dexterity: req.body.dexterity,
    intelligence: req.body.intelligence,
    weapon_id: wepId,
    armor_id: armId,
    user_id: req.session.user_id
  })

    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
})

module.exports = router;