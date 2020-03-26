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
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = require("../connections");
const showClgs = true;
exports.getEmployee = (_root, { name, rid }) => __awaiter(void 0, void 0, void 0, function* () {
    const session = connections_1.neo4jDriver.session();
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
    const session = connections_1.neo4jDriver.session();
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
    const session = connections_1.neo4jDriver.session();
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
//# sourceMappingURL=employeeManagement.js.map