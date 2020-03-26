import _ from "lodash";
import { neo4jDriver as driver } from "../connections";

const showClgs = true;

export const getEmployee = async (_root: any, { name, rid }: any) => {

    const session = driver.session();
    let resultToReturn;
    try {
        resultToReturn = await session.readTransaction(async (txc: any) => {
            const result = await txc.run("MATCH (person {name: $nameParam }) RETURN person", { nameParam: name });
            return result.records.map((record: any) => record.get("person").properties);
        });
    } catch (error) {
        console.log(error);
    } finally {
        await session.close();
        return resultToReturn;
    }
};


export const getEmployees = async (_root: any) => {
    const session = driver.session();
    let resultToReturn;
    try {
        resultToReturn = await session.readTransaction(async (txc: any) => {
            const result = await txc.run("MATCH (person:Person) RETURN person");
            return result.records.map((record: any) => record.get("person").properties);
        });
    } catch (error) {
        console.log(error);
    } finally {
        await session.close();
        return resultToReturn;
    }
};


export const createEmployee = async (_root: any, { name }: any) => {
    const session = driver.session();
    let resultToReturn;
    try {
        resultToReturn = await session.writeTransaction(async (txc: any) => {
            const result = await txc.run("MERGE (alice:Person {name : 'Alice' }) RETURN alice.name AS name");
            return result.records.map((record: { get: (arg0: string) => void }) => record.get("name"));
        });
    } catch (error) {
        console.log(error);
    } finally {
        await session.close();
        return resultToReturn;
    }
};
