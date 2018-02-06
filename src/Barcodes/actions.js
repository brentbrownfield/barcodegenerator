import * as t from './actionTypes';
import shortid from 'shortid';

export const add = (type, data) => ({
    type: t.ADD,
    payload: { id: shortid.generate(), type: type, data: data }
});

export const remove = (id) => ({
    type: t.DELETE,
    payload: { id: id }
});

export const edit = (id, type, data) => ({
    type: t.EDIT,
    payload: { id: id, type: type, data: data }
});