const express = require('express');
const burger = require('../models/burger');

let router = express.Router();

router.get('/', (req,res) => {
    burger.all((data) =>{
        let hbsObject = {
            burgers: data
          };
          console.log(hbsObject);
          res.render('index', hbsObject);
    });
    
});

router.post('/api/burgers', (req,res)=>{
    // console.log(req.body.burger_name);
    burger.make(req.body.burger_name,()=>{
    res.json({ id: result.insertId });
    })
});


module.exports = router;