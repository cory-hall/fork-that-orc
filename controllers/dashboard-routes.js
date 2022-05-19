const router = require('express').Router();
const { Weapons, Armors, Character } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection')

// GET all builds for dashboard view, with withAuth helper
router.get('/', withAuth, (req, res) => {
  Character.findAll({
    where: {
       // get user_id from session user_id
    user_id: req.session.user_id
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
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE hero.id = vote.hero_id)'), 'vote_count']
    ],
    include: [
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
      // serialize the data before passing to template
      const builds = dbData.map(build => build.get({ plain: true }));
      res.render('user-heros', { builds, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// redirect to main character create page
router.get('/charcreate', withAuth, (req, res) => {
  res.render('charcreate', {loggedIn: true});
})

module.exports = router;