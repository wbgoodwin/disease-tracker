"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const neo4j_driver_1 = __importDefault(require("neo4j-driver"));
const dbLoginInfo = {
    uri: "bolt://localhost:7687",
    user: "neo4j",
    password: "password"
};
exports.neo4jDriver = neo4j_driver_1.default.driver(dbLoginInfo.uri, neo4j_driver_1.default.auth.basic(dbLoginInfo.user, dbLoginInfo.password));
//# sourceMappingURL=connections.js.map