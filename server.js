const http = require("http"); //commonjs 
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  console.log("Request received");

  res.writeHead(200, {
    "Content-Type": "text/plain",
    "X-Powered-By": "Node.js",
    "Cache-Control": "no-store",
  });

  res.end("🚀 Hello updated worlasdfadsfd!");
});

server.listen(PORT, () => {
  console.log("Server running on port 8000");
});
