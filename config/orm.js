const connection = require('./connection');

let orm = {
    selectAll: (table) =>{
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, [table], (err, data)=>{
            if(err) throw err;
            return result;
        });
    },
    //takes an array values and a table name
    insertOne: (table,values)=>{
        let queryString = 'INSERT INTO ?? (burger_name, devoured) VALUES (?,?)'
        connection.query(queryString,[table,values[0],values[1]]);
    },
    updateOne: (table,column,burger, devoured,id) => {
        let queryString = "UPDATE ?? SET burger_name = ??, devoured = ?? WHERE id = ??"

        [table,column,burger, devoured,id]
    }
};


module.exports = orm;