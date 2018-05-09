import { create } from 'domain';

const mysql = require('mysql');


if(process.env.JASDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else{
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'burgers_db'

});
}

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });
  

  module.exports = connection;