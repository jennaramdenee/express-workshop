var express = require('express')
var formidable = require('express-formidable')
var app = express()

app.use(formidable())

app.use(express.static("public"))

app.post("/create-post", function(request, response){
  console.log(request.fields.blogpost)
})

app.listen(3000, function(){
  console.log("Server is listening on port 3000. Ready to accept requests!")
})
