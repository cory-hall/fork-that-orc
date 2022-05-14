const router = require('express').Router();
const { Armors } = require('../../models/')

// GET all Armor
router.get('/', (req, res) => {
  Armors.findAll({})
    .then(dbData => res.json(dbData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET one armor by `id` value
router.get('/:id', (req, res) => {
  Armors.findAll({
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

// POST to create a new armor
router.post('/', (req, res) => {
  if (req.session) {
    // expects {"armor_name": "Plate Armor", "armor_class": "Warrior", "armor_rating": "8"
    Armors.create({
      armor_name: req.body.armor_name,
      armor_class: req.body.armor_class,
      armor_rating: req.body.armor_rating
    })
      .then(dbData => res.json(dbData), res.send(dbData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      })
  }
});

// DELETE a armor based on `id` value
router.delete('/:id', (req, res) => {
  Armors.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbData => {
      if (!dbData) {
        res.status(404).json({ message: 'No armor found with this id' });
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