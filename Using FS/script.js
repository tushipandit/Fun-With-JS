const fs=require('fs');

fs.readFile('/home/tusharsharma/tushi-work/projects/without git/node/usingfs/hello.txt',(err,data)=>{
    console.time('challenge');
    if(err){
        console.log('errror');
    }
    console.log('async',data.toString('utf8'));//encoding
    console.timeEnd('challenge');
})

const file = fs.readFileSync('/home/tusharsharma/tushi-work/projects/without git/node/usingfs/hello.txt');
console.log('sync',file.toString());

fs.appendFile('/home/tusharsharma/tushi-work/projects/without git/node/usingfs/hello.txt','this is soooo cool',err=>{
    if(err){
        console.log(err);
    }
})

fs.writeFile('bye.txt','sad to see you go',err=>{
    console.log(err);
})
//Delete
fs.unlink('/home/tusharsharma/tushi-work/projects/without git/node/usingfs/bye.txt',err=>{
    if(err){
        console.log(err)
    }
    console.log('inception')
})
