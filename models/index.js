//import models
const Armors = require('./Armors');
const Character = require('./Character');
const Inventory = require('./Inventory');
const User = require('./User');
const Weapons = require('./Weapons');

//const Consumables = require('./Consumables');

Weapons.hasMany(Character, {
    foreignKey: 'weapon_id'
});

Character.belongsTo(Weapons, {
    foreignKey: 'character_id'
});

Armors.hasMany(Character, {
    foreignKey: 'armor_id'
});

Character.belongsTo(Armors, {
    foreignKey: 'character_id'
});

User.hasMany(Character, {
    foreignKey: 'user_id'
})

Character.belongsTo(User, {
    foreignKey: 'character_id'
})

module.exports = { User, Weapons, Armors, Character };