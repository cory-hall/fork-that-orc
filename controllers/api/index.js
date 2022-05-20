const router = require('express').Router();

// all api routes
const characterRoutes = require('./character-routes.js');
const userRoutes = require('./user-routes.js');
const weaponRotes = require('./weapon-routes');
const armorRoutes = require('./armor-routes');
const createRoutes = require('./create-routes');

// all api end point
router.use('/characters', characterRoutes);
router.use('/users', userRoutes);
router.use('/weapons', weaponRotes);
router.use('/armors', armorRoutes);
router.use('/create', createRoutes)

module.exports = router;