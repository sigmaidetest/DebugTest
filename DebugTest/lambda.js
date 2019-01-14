exports.handler = function(event, context, callback) {
    
    let a = event;
    a.name = "Mike";
    console.log(a);
    callback(null, a);
}

require('aws-lambda-debugger');