//start making a server
const express = require ('express'); //gives access to express library
const app= express(); //creates instance of express constructor "app"


const mockUserData=[
{name:'Mark'},
{name:'Jill'}
]
app.get('/users', function(req,res){
 	res.json({
 	 	success: true,
 	 	message: 'successfully got users. Nice!',
 	 	users: mockUserData
 	})
})

app.listen(8000, function(){
console.log("server is running")
})