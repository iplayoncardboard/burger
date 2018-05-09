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
    insertOne:(value,cb)=>{
        let queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES (?,false)'
        connection.query(queryString,[value],(err, data)=>{
            if(err){
                console.log('ORM ERROR: '+ err)
            } 
            cb(data);
        });

    },
    updateOne: (devoured,id,cb) => {
        // console.log("ORM IS DEVOWERING"+ devoured);
        
        let boolz = 0;
        if(devoured){
            boolz = 1;
        }
        let queryString = "UPDATE burgers SET devoured = ? WHERE id = ?"

        connection.query(queryString,[boolz,id],(err, data)=>{
            if(err){
                console.log('ORM ERROR: '+ err)
            } 
            cb(data);
        });

    }
};


module.exports = orm;