const http = require("http");

const server = http.createServer((request,response)=>{

    //console.log(request.headers);
    console.log(request.method);
    console.log(request.url);
const user = {
    name:'john',
    hobby:'skaating'
}

    response.setHeader('content-type','application/json');
    response.end(JSON.stringify(user));

    //console.log("i hear you!");
})

server.listen(3000);