var http = require("http")
var PORT = 7000
const PORT1 = 7500

function handleRequest(request, response) {
  response.end("Gorgeous")
}

function handleRequest1(request, response) {
    response.end("Ugly")
  }

var server = http.createServer(handleRequest)
var server1 = http.createServer(handleRequest1)

server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT)
})

server1.listen(PORT1, function() {
    console.log("Server listening on: http://localhost:" + PORT1)
})


