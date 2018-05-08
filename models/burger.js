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
    },
    update: (burgerName,devValue,id,cb)=> {
        orm.updateOne("burgers",'burger_name',burgerName,devValue,id,(res)=>{
            cb(res);
        });
    }

}

module.exports= burger;