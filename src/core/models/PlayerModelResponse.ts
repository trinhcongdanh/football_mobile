export const PlayerSchema = {
    name: 'player',
    properties: {
        _id: 'int',
        name: 'string',
        status: 'string?',
    },
    primaryKey: '_id',
};
