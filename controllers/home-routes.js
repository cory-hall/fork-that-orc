const router = require('express').Router();
const { User, Weapons, Armors, Character } = require ('../models');

router.get('/', (req, res) => {
  Character.findAll({
  })
  .then(dbData => {
    const builds = dbData.map(build => build.get({ plain: true }));
    res.render('homepage', { builds, loggedIn: req.session.loggedIn})
  })
  .catch(err => {
    
  })
})