const router = require('express').Router();
const { Weapons } = require('../../models/');
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

// LEGACY //
// POST to create a new weapon
// router.post('/', withAuth,(req, res) => {
//   if (req.session) {
    // expects {"weapon_name": "Sword", "weapon_class": "Warrior", "weapon_rating": "8"
    // Weapons.create({
    //   weapon_name: req.body.weapon_name,
    //   weapon_class: req.body.weapon_class,
    //   weapon_rating: req.body.weapon_rating,
      // TODO
      // weapon_image: req.body.weapon_image
//     })
//       .then(dbData => {
//         res.json(dbData);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(400).json(err);
//       })
//   }
// });

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