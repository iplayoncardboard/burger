const orm = require('../config/orm');

let burger = {
    all: (hollaBack) => {
        orm.selectAll('burgers', (res)=>{
            hollaBack(res);
        });
    },
    make: (value, hollaBack) => {
        orm.insertOne(values, (res)=>{
            hollaBack(res);
        });
    }

}



module.exports= burger;