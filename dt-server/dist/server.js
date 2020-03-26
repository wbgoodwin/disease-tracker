"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("./graphql/schema");
const resolvers_1 = require("./graphql/resolvers");
const http_1 = __importDefault(require("http"));
//import app from "./app";
const configurations = {
    production: {},
    development: { port: 4000, hostname: "localhost" }
};
const environment = process.env.NODE_ENV || "development";
const config = configurations["development"];
/**
 * Start Apollo server.
 */
const apollo = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: resolvers_1.resolvers,
});
const app = express_1.default();
apollo.applyMiddleware({ app });
const server = http_1.default.createServer(app);
server.listen({ port: config.port }, () => {
    console.log("  App is running at http://localhost:%d in %s mode", config.port, environment);
    console.log("  Press CTRL-C to stop\n");
});
exports.default = server;
//# sourceMappingURL=server.js.map