// Import necessary packages
const http = require('http');
const connect = require('connect');
const url = require('url');

// Create a Connect app
const app = connect();

//  A function to perform math operations
function calculateValue(method, x, y) {

   let methodKey = {'add': '+', 'subtract' : '-', 'multiply': '*', 'divide': '/'}

  let result;
  switch (method) {
    case 'add':
      result = x + y;
      break;
    case 'subtract':
      result = x - y;
      break;
    case 'multiply':
      result = x * y;
      break;
    case 'divide':
      if (y === 0) {
        return 'Error: Division by zero';
      }
      result = x / y;
      break;
    default:
      return 'Error: Invalid method';
  }
  return `${x} ${methodKey[method]} ${y} = ${result}`;
}

// Create a middleware to handle incoming requests
app.use((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { method, x, y } = parsedUrl.query;

  // Check if method, x, and y are provided in the URL
  if (!method || isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
    res.end('Error: Invalid parameters !!');
    return;
  }

  // Calculate the result and send it as a response
  const result = calculateValue(method, parseFloat(x), parseFloat(y));
  res.end(result);
});

// Create an HTTP server using the Connect app
const server = http.createServer(app);

// Set the server to listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
