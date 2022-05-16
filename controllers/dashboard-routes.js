const router = require('express').Router();
const { User, Weapons, Armors, Character } = require('../models');
const withAuth = require('../utils/auth');

// GET all builds for dashboard view, with withAuth helper
router.get('/heros', withAuth, (req, res) => {
  Character.findAll({
    where: {
       // get user_id from session user_id
    user_id: req.session.user_id
    },
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbData => {
      // serialize the data before passing to template
      const builds = dbData.map(build => build.get({ plain: true }));
      res.render('heros', { builds, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/charcreate', (req, res) => {
  res.render('charcreate');
})

module.exports = router;