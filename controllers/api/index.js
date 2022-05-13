const router = require('express').Router();

const characterRoutes = require('./character-routes.js');
const inventoryRoutes = require('./inventory-routes.js');
const userRoutes = require('./user-routes.js');
const weaponRoutes = require('./weapon-routes');
const armorRoutes = require('./armor-routes')

router.use('/characters', characterRoutes);
// router.use('/inventory', inventoryRoutes);
router.use('/users', userRoutes);
router.use('/weapons', weaponRoutes)
router.use('/armors', armorRoutes);

module.exports = router;