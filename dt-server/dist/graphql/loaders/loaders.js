"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const driver = neo4j_driver_1.default.driver(dbLoginInfo.uri, neo4j_driver_1.default.auth.basic(dbLoginInfo.user, dbLoginInfo.password));
const showClgs = true;
exports.getEmployee = (_root, { name, rid }) => __awaiter(void 0, void 0, void 0, function* () {
    const session = driver.session();
    let resultToReturn;
    try {
        resultToReturn = yield session.readTransaction((txc) => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield txc.run("MATCH (person {name: $nameParam }) RETURN person", { nameParam: name });
            return result.records.map((record) => record.get("person").properties);
        }));
    }
    catch (error) {
        console.log(error);
    }
    finally {
        yield session.close();
        return resultToReturn;
    }
});
exports.getEmployees = (_root) => __awaiter(void 0, void 0, void 0, function* () {
    const session = driver.session();
    let resultToReturn;
    try {
        resultToReturn = yield session.readTransaction((txc) => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield txc.run("MATCH (person:Person) RETURN person");
            return result.records.map((record) => record.get("person").properties);
        }));
    }
    catch (error) {
        console.log(error);
    }
    finally {
        yield session.close();
        return resultToReturn;
    }
});
exports.createEmployee = (_root, { name }) => __awaiter(void 0, void 0, void 0, function* () {
    const session = driver.session();
    let resultToReturn;
    try {
        resultToReturn = yield session.writeTransaction((txc) => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield txc.run("MERGE (alice:Person {name : 'Alice' }) RETURN alice.name AS name");
            return result.records.map((record) => record.get("name"));
        }));
    }
    catch (error) {
        console.log(error);
    }
    finally {
        yield session.close();
        return resultToReturn;
    }
});
//# sourceMappingURL=loaders.js.map