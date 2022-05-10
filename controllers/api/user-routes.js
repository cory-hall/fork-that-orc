const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Armor, Character, Consumables, Inventory, User, Weapons } = require('../../models');

module.exports = router;

// log-out POST method

//login post (/login)