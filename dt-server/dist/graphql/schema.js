"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `

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
//# sourceMappingURL=schema.js.map