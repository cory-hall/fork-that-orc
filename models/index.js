//import models
const Armors = require('./Armors');
const Character = require('./Hero');
// const Inventory = require('./Inventory');
const User = require('./User');
const Weapons = require('./Weapons');

Weapons.hasMany(Character, {
    foreignKey: 'weapon_id'
});

Character.belongsTo(Weapons, {
    foreignKey: 'weapon_id'
});

Armors.hasMany(Character, {
    foreignKey: 'armor_id'
});

Character.belongsTo(Armors, {
    foreignKey: 'armor_id'
});

User.hasMany(Character, {
    foreignKey: 'user_id'
})

Character.belongsTo(User, {
    foreignKey: 'user_id'
})


module.exports = { User, Weapons, Armors, Character };