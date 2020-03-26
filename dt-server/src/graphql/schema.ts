import { gql } from "apollo-server-express";

export const typeDefs = gql`

    type Employee {
        name: String
        current_employee: Boolean
    }

    type Query {
        getEmployee(name: String): [Employee]
        getEmployees: [Employee]
    }

    type Mutation {
        createEmployee(name: String): [Employee]
    }

    schema {
        query: Query
        mutation: Mutation
    }

`;
