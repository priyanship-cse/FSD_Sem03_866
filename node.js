const a = [1,2,3,45,6,7,8,9,10];
for(let i = 0; i < a.length; i++) {
   console.log(a[i]);clear

 }

 const fs = require('node:fs');

 try{
    const content =  'This is a written synchronously.' ;
    fs.writeFileSync('output.txt' , content , 'utf8');
    console.log('File written successfully');
}catch(err){
    console.error(err);
    
}


