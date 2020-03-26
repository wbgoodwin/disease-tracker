import Immutable from 'immutable';


export default function transform(state: any): any {
    if (state === null) {
        return state;
    }
    const t = typeof (state);
    if (t === 'number' || t === 'boolean' || t === 'string' || t === 'undefined') {
        return state;
    }
    if (state instanceof Array) {
        return state.map(el => transform(el));
    }

    let newState: any = [];
    for (let i of Object.keys(state)) {
        newState[i] = transform(state[i]);
    }
    return newState;
}