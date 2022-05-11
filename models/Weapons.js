const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weapon extends Model {}

Weapon.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        armor_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weapon_class: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weapon_rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'weapon',
    }
);

module.exports = Weapon;