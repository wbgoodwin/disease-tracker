import _ from "lodash";

class RecordID {
    constructor(public cluster: number, public position: number) {
    }
}


export const stringRidToObject = (rid: string) => {
    if (_.isEmpty(rid)) {
        return {};
    }
    const splitRid = rid.split(":");
    if (splitRid[0].startsWith("#")) {
        splitRid[0] = splitRid[0].substring(1);
    }
    return new RecordID(parseInt(splitRid[0]), parseInt(splitRid[1]));
};