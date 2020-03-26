"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employeeManagement_1 = require("./loaders/employeeManagement");
exports.resolvers = {
    Query: {
        getEmployee: employeeManagement_1.getEmployee,
        getEmployees: employeeManagement_1.getEmployees
    },
    Mutation: {
        createEmployee: employeeManagement_1.createEmployee
    }
};
//# sourceMappingURL=resolvers.js.map