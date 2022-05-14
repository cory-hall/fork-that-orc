const router = require('express').Router();
const { Weapons } = require('../../models/')

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

// POST to create a new weapon
router.post('/', (req, res) => {
  if (req.session) {
    // expects {"weapon_name": "Sword", "weapon_class": "Warrior", "weapon_rating": "8"
    Weapons.create({
      weapon_name: req.body.weapon_name,
      weapon_class: req.body.weapon_class,
      weapon_rating: req.body.weapon_rating
    })
      .then(dbData => {
        res.append("wep_id", dbData.id)
        res.json(dbData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      })
  }
});

// DELETE a weapon based on `id` value
router.delete('/:id', (req, res) => {
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