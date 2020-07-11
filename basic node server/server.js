const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');


const PORT=5000;
const app = express();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }));

app.use(cors());


app.get('/',(req,res)=>{

    res.json("this is working");

});
    

app.listen(PORT,()=>{
    console.log("server running at "+PORT);

})