const router = require('express').Router();
const { Weapons, Armors, Character } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

var wepId;
var armId;

router.post('/', withAuth,(req, res) => {
  if (req.session) {
    // expects {"weapon_name": "Sword", "weapon_class": "Warrior", "weapon_rating": "8"
    await Weapons.create({
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
.then(
router.post('/', withAuth, (req, res) => {
  if (req.session) {
    // expects {"armor_name": "Plate Armor", "armor_class": "Warrior", "armor_rating": "8"
    Armors.create({
      armor_name: req.body.armor_name,
      armor_class: req.body.armor_class,
      armor_rating: req.body.armor_rating
    })
      .then(dbData =>{
        armId = dbData.id
        res.json(dbData)
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      })
  }
}))
.then(router.post('/', withAuth, (req, res) => {
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
}))

module.exports = router;