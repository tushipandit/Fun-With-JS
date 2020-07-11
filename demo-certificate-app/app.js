const express= require('express');
const app= express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
app.set("view engine",'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.render("index");
})

/*var name = localStorage.getItem('namevalue');
var course = localStorage.getItem('coursevalue');
var percent = localStorage.getItem('percentvalue');
var date = localStorage.getItem('datevalue');

var data = [{name1 : name, course1 : course, percent1 : percent, date1 : date}]*/

app.post('/cert',function(req,res){
    //var data = [{name : req.query('name'), course : req.query('course'), percent : req.query('percent'), date : req.query('date')}]
    var name = req.body.name;
    var course = req.body.course;
    var percent = req.body.percent;
    var date = req.body.date;
    var newDat = {name : name, course : course, percent : percent, date : date}
    
    //rep.render('cert',{name : req.params.name});
    res.render('cert',{newDat : newDat})
    res.redirect("/cert")
})

app.listen(2244,function()
{
    console.log("server is live on port 2244");
})