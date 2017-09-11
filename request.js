var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   
         throw err; 
       })
       .on('response', function (response) {  
      console.log("download complete.")                        
         console.log('Response Status Code: ', response.statusCode, "Response Status Message", response.statusMessage, "Response content Type", response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));

       console.log("donwloading image...")  
       	
                   
