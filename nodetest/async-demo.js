fs = require('fs');

function phonenumber(err, data) {
    console.log('data:', data);
}
data = fs.readdir("/Users/gauravagnihotri/work/code/src/github.com/agnihotrigaurav/node", phonenumber);

console.log("this comes after")
