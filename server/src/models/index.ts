import { Task, User } from "./userModel";

User.hasMany(Task, { foreignKey: "assigner_id", as: "AssignedTasks" });


User.hasMany(Task, { foreignKey: "assignee_id", as: "ReceivedTasks" });


Task.belongsTo(User, { foreignKey: "assigner_id", as: "Assigner" });


Task.belongsTo(User, { foreignKey: "assignee_id", as: "Assignee" });

export const index = { Task, User }

