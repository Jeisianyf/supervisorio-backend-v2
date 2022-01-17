import knex from 'knex';

const db = knex({
    client: 'pg',
    connection: {
        host: 'by1m0ecnkevbdpbydqsw-postgresql.services.clever-cloud.com',
        user: 'ui83ojofenlupimcxioh',
        password: 'meb5LLAhivu0XI4hEZc3',
        database: 'by1m0ecnkevbdpbydqsw'
    },
    useNullAsDefault: true,
});

export default db;