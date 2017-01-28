var express = require('express')
var formidable = require('express-formidable')
var app = express()
var fs = require('fs')

app.use(formidable())

app.use(express.static("public"))


app.post("/create-post", function(request, response){
  fs.readFile(__dirname + '/data/posts.json', function (error, file) {
    var parsedFile = JSON.parse(file)
    parsedFile[Date.now()] = request.fields.blogpost
    var data = JSON.stringify(parsedFile)
    fs.writeFile(__dirname + '/data/posts.json', data, function(error){
      if (error) { console.log(error) }
    })
  });

})

app.get("/get-posts", function(request, response){
  response.sendFile(__dirname + '/data/posts.json')
})

app.listen(3000, function(){
  console.log("Server is listening on port 3000. Ready to accept requests!")
})
