import { BSON } from 'realm';

export type Task = {
    _id: BSON.ObjectId;
    _partition?: string;
    name: string;
    status: string;
};

export const TaskSchema = {
    name: 'Task',
    properties: {
        _id: 'objectId',
        _partition: 'string?',
        name: 'string',
        status: 'string',
    },
    primaryKey: '_id',
};
