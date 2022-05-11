const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Consumable extends Model {}

Consumable.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        consumable_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        consumable_class: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'consumable',
    }
);
module.exports = Consumable;