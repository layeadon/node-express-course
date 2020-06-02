//start making a server
const express = require ('express'); //gives access to express library
const app= express(); //creates instance of express constructor "app"

app.listen(8000, function(){
console.log("server is running")
})