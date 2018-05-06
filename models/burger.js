const orm = require('../config/orm');

let burger = {
    all: (hollaBack) => {
        orm.selectAll('burgers', (res)=>{
            hollaBack(res);
        });
    }

}



module.exports= burger;