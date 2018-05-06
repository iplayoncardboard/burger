const orm = require('../config/orm');

let burger = {
    all: (hollaBack) => {
        orm.selectAll('burgers', (res)=>{
            hollaBack(res);
        });
    },
    make: (value, hollaBack) => {
        console.log('MakeValue: '+ value);
        orm.insertOne(value, (res)=>{
            hollaBack(res);
        });
    }

}

module.exports= burger;