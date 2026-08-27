const fs = require('fs');

try {
    const data = fs.readFileSync('data.txt','utf8');
      console.log(data);
} catch(err) {
    console.log("Error" , err);
}


