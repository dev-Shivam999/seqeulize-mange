import { DataTypes } from "sequelize";
import { sequelize } from "../config/SequelizeConfig";

export const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    }
});
export const Task = sequelize.define('Task', {
    task_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  
    task: {
        type: DataTypes.STRING,
        allowNull: true
    },
    assigner_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "user_id",
        },
    },
    assignee_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "user_id",
        },
    },
})