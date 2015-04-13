var mysql_pool = require('mysql');

/* MYSQL RDS */
// var pool  = mysql_pool.createPool({
// 	host     : 'sampledb.cy0fkl5xnx4r.us-west-1.rds.amazonaws.com',
// 	user     : 'root',
// 	password : 'rootroot',
// 	port     : '3306',
// 	database : 'sampledb',
// 	connectionLimit : '10'
// });

var mysql = require('mysql');
var dbconfig = require('/srv/www/sampledb/shared/config/opsworks.js');

var pool = mysql.createPool({
  host: dbconfig.db['host'],
  user: dbconfig.db['username'],
  password: dbconfig.db['password'],
  port: dbconfig.db['port'],
  database: dbconfig.db['database'],
  connectionLimit : '10'
});

/* LOCAL MYSQL CONNECTION*/
/*var pool  = mysql_pool.createPool({

	host     : 'localhost',
	user     : 'root',
	password : 'root',
	port     : '3306',
	database : 'users',
	connectionLimit : '10'
});
*/
exports.pool = pool;
