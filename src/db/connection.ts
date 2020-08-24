import path from 'path'
import knex from 'knex'

//create the database connection. Knex will allow to create queries with JS

//migrations - control the version of the database

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve( __dirname, 'database.sqlite')
    },
    useNullAsDefault: true
});

export { db };