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
    update: (devValue,id,cb)=> {
        orm.updateOne(devValue,id,(res)=>{
           
            cb(res,  console.log("Hollaback from: model"));
        });
    }

}

module.exports= burger;