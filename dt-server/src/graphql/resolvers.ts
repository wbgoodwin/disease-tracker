import { getEmployee, getEmployees, createEmployee } from "./loaders/employeeManagement";

export const resolvers = {
    Query: {
        getEmployee,
        getEmployees
    },

    Mutation: {
        createEmployee
    }
};
