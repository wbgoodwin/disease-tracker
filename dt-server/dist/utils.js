"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
class RecordID {
    constructor(cluster, position) {
        this.cluster = cluster;
        this.position = position;
    }
}
exports.stringRidToObject = (rid) => {
    if (lodash_1.default.isEmpty(rid)) {
        return {};
    }
    const splitRid = rid.split(":");
    if (splitRid[0].startsWith("#")) {
        splitRid[0] = splitRid[0].substring(1);
    }
    return new RecordID(parseInt(splitRid[0]), parseInt(splitRid[1]));
};
//# sourceMappingURL=utils.js.map