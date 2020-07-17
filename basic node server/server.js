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

app.get('/:id',(req,res)=>{
    //console.log(req.query);
    //req.body
    //console.log(req.header)
    console.log(res.params)
    res.send('getting root');
})
    
app.post('/profile',(req,res)=>{

    console.log(req.body)
    res.send('sucess');

})


app.listen(PORT,()=>{
    console.log("server running at "+PORT);

})