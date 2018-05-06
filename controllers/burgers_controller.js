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


module.exports = router;