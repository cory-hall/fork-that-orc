const router = require('express').Router();
const { Weapons, Armors, Character } = require('../../models/');
const withAuth = require('../../utils/auth');

// GET all weapons
router.get('/', (req, res) => {
  Weapons.findAll({})
    .then(dbData => res.json(dbData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET one weapon by `id` value
router.get('/:id', (req, res) => {
  Weapons.findAll({
    where: {
      id: req.params.id
    }
  })
    .then(dbData => res.json(dbData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

var weaponId;
var armorId;

// POST to create a new weapon
router.post('/', withAuth,[middleware.getChar, middleware.getArmor],(req, res) => {
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
        weaponId = dbData.id;
        res.json(dbData);
      })
        .then(Armors.create({
          armor_name: req.body.armor_name,
          armor_class: req.body.weapon_class,
          armor_rating: req.body.armor_rating
        }))
          .then(dbData => {
            armorId = dbData.id;
            res.json(dbData);
          })
            .then(Character.create({
              character_name: req.body.character_name,
              character_class: req.body.character_class,
              health: req.body.health,
              mana: req.body.mana,
              strength: req.body.strength,
              dexterity: req.body.dexterity,
              intelligence: req.body.intelligence,
              weapon_id: weaponId,
              armor_id: armorId,
              user_id: req.session.user_id
            }))
              .then(dbData => {
                res.json(dbData)
              })
              .catch(err => {
                console.log(err);
                res.status(500).json(err);
              })
  }
});

// PUT to update weapon based on `id` value
router.put('/:id', withAuth, (req, res) => {
  Weapons.update(
    {
      weapon_name: req.body.weapon_name,
      weapon_rating: req.body.weapon_rating
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbData => {
      if (!dbData) {
        res.status(404).json({ message: 'No weapon found with this id' });
        return;
      }
      res.json(dbData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE a weapon based on `id` value
router.delete('/:id', withAuth, (req, res) => {
  Weapons.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbData => {
      if (!dbData) {
        res.status(404).json({ message: 'No weapon found with this id' });
        return;
      }
      res.json(dbData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
})

module.exports = router;