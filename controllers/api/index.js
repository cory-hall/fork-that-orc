const router = require('express').Router();

const characterRoutes = require('./character-routes.js');
const inventoryRoutes = require('./inventory-routes.js');
const userRoutes = require('./user-routes.js');
const weaponRotes = require('./weapon-routes');

router.use('/characters', characterRoutes);
// router.use('/inventory', inventoryRoutes);
router.use('/users', userRoutes);
router.use('/weapons', weaponRotes)

module.exports = router;