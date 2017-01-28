var express = require('express')
var app = express()

app.get("/", function(request, response){
  response.send("Yay Node Girls!")
})

// app.get("/node", function(request, response){
//   response.send("Gotta love Node!")
// })
//
// app.get("/")

app.listen(3000, function(){
  console.log("Server is listening on port 3000. Ready to accept requests!")
})
