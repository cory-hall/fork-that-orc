const router = require('express').Router();

const characterRoutes = require('./character-routes.js');
const inventoryRoutes = require('./inventory-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/character', characterRoutes);
router.use('/inventory', inventoryRoutes);
router.use('/user', userRoutes);

module.exports = router;

//login page
// router.post (/login)