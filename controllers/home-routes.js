const router = require('express').Router();
const { User, Weapons, Armors, Character } = require ('../models');

// main/signup route
router.get('/', (req, res) => {
  res.render('homepage');
})

// login route
router.get('/login', (req, res) => {
  res.render('login')
})

// GET all characters and send to handlebars
router.get('/all-heros', (req, res) => {
  Character.findAll({
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Weapons,
        attributes: [
          'id',
          'weapon_name',
          'weapon_rating'
        ]
      },
      {
        model: Armors,
        attributes: [
          'id',
          'armor_name',
          'armor_rating'
        ]
      }
    ]
  })
  .then(dbData => {
    const builds = dbData.map(build => build.get({ plain: true }));
    res.render('all-heros', { builds, loggedIn: req.session.loggedIn})
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;