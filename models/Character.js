const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        character_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        character_class: {
            type: DataTypes.STRING,
            allowNull: false
        },
        health: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        mana: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        character_weapon: {
            type: DataTypes.INTEGER,
            references: {
                // add weapon info here after weapon model is created
            }
        },
        character_armor: {
            type: DataTypes.INTEGER,
            references: {
                // add armor info here after armor model is created
            }
        },
        character_consumable: {
            type: DataTypes.INTEGER,
            references: {
                // add consumable info here after consumable model is created
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'character'
    }
);

module.exports = Character;