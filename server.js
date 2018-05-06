const express = require('express');
const body = require('body-parser');


let app = express

let PORT = process.env.PORT || 8080;





app.listen(PORT, ()=>{
    console.log('Listening on port ' + PORT);
});