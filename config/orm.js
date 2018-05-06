const connection = require('./connection');

let orm = {
    selectAll: (table,cb) =>{
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, [table], (err, data)=>{
            if(err) throw err;
            cb(data);
        });
    },
    //takes an array values and a table name
    insertOne: (value,cb)=>{
        let queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES (??,FALSE)'
        connection.query(queryString,[value],(err, data)=>{
            if(err) throw err;
            cb(data);
        });

    },
    updateOne: (table,column,burger, devoured,id) => {
        let queryString = "UPDATE ?? SET burger_name = ??, devoured = ?? WHERE id = ??"

        [table,column,burger, devoured,id]
    }
};


module.exports = orm;