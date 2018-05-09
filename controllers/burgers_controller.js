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
    burger.make(req.body.burger_name,(result)=>{
    res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
  //burgerName,devValue,id,cb
    console.log("PUT ID: "+ req.params.id);
    console.log("BODY TXT: "+ req.body.devoured);
    burger.update( req.body.devoured , req.params.id, (result) => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200)
      }
    });
  });


module.exports = router;