
var http = require('http');
http.createServer(function (req,res){

    res.writeHead(200,{'Content-Type':'text/html'});
    var url=req.url;
    if(url=='/about'){
        res.write('welcome to about the page');
        res.end();}
        else if(url=='/contact'){
            res.write('welcome to about us page ');
            res.end();
        }
        else{
            res.write('hello world!');
            res.end();
        }
    }).listen(30001,function(){
        console.log("server start at 30001");
        
}
);

