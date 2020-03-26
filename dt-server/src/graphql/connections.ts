import neo4j from "neo4j-driver";
const dbLoginInfo = {
    uri: "bolt://localhost:7687",
    user: "neo4j",
    password: "password"
};
export const neo4jDriver = neo4j.driver(dbLoginInfo.uri, neo4j.auth.basic(dbLoginInfo.user, dbLoginInfo.password));