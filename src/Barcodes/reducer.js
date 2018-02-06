import * as t from './actionTypes'
import {Map} from 'immutable'

export default (state = Map(), action) => {
    switch(action.type) {
        case t.ADD:
            return state.set(action.payload.id, action.payload);
        case t.DELETE:
            return state.delete(action.payload.id);
        case t.EDIT:
            return state.set(action.payload.id, action.payload);
        default:
            return state;
    }
};