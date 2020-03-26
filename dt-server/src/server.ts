import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import http from "http";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";


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
const apollo = new ApolloServer({
    typeDefs,
    resolvers,
/*     context: ({ req }) => {
        // Note! This example uses the `req` object to access headers,
        // but the arguments received by `context` vary by integration.
        // This means they will vary for Express, Koa, Lambda, etc.!
        //
        // To find out the correct arguments for a specific integration,
        // see the `context` option in the API reference for `apollo-server`:
        // https://www.apollographql.com/docs/apollo-server/api/apollo-server/

        // Get the user token from the headers.
        const token = req.headers.authorization || '';

        // try to retrieve a user with the token
        const user = getUser(token);
        // optionally block the user
        // we could also check user roles/permissions here
        if (!user) throw new AuthenticationError('you must be logged in');

        // add the user to the context
        return { user };
    }, */
});

const app = express();
apollo.applyMiddleware({ app });

const server = http.createServer(app);


server.listen({ port: config.port }, () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        config.port,
        environment
    );
    console.log("  Press CTRL-C to stop\n");
});


export default server;
