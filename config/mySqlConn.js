var mysql_pool = require('mysql');
var pool  = mysql_pool.createPool({
			"host":"demoapp.cnfiarybvhfe.us-west-1.rds.amazonaws.com",
             "database":"sampledb",
              "port":3306,
               "username":"root",
               "password":"rootroot",
               "reconnect":true,
                "data_source_provider":"rds",
                 "type":"mysql",

	// host     : 'localhost',
	// user     : 'root',
	// password : 'root',
	// port     : '3306',
	// database : 'Users',
	"connectionLimit" : 10
});

exports.pool = pool;