const { Pool } = require('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration');

const pool = new Pool(databaseConfiguration);

module.exports = pool;

// test pool connection
// pool.query('SELECT * from generation', (err, resp) => {
// 	if (err) return console.log('error', err);

// 	console.log('response.rows', resp.rows);
// })