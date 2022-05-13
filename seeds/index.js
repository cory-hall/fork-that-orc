const seedWeapons = require('./weapon-seeds');
const seedArmors = require('./armor-seeds');
const seedCharacter = require('./character-seeds');



const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    
    await seedWeapons();
    console.log('--------------');

    await seedArmors();
    console.log('--------------');

    await seedCharacter();
    console.log('--------------');

    process.exit(0);
};

seedAll();