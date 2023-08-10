// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



// console.log("Hello world");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World, this is Hariom');
// In DOCTYPE html always use backticks ( `` ) which is above of tab button in keyboard 
  res.end(`<!DOCTYPE html>       
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>psuedo selectors& more designing</title>
      <style>
          .container{
              border: 2px solid greenyellow;
              background: rgb(241, 204, 204);
              margin: 34px auto;
              padding: 34px;
              width: 666px;
              font-style: italic;
          }
          a{
              text-decoration: none;
          }
          a:hover{
              color: azure;
              background-color: bisque;
          }
          a:visited{
              background-color: rgb(249, 252, 115);
          }
          a:active{
              background-color: rgb(117, 236, 38);
          }
          .btn{
              background-color: aqua;
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 18px;
              border-radius: 4px;
          }
          .btn:hover{
              color: rgb(238, 177, 24);
              background-color: black;
              border: 2px solid white;
          }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>this is my heading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus reiciendis consequatur nulla minima doloremque incidunt fuga modi! Dicta error sequi quisquam, harum quas, a saepe laborum ad recusandae ullam at! Voluptatum veritatis quisquam accusantium sequi, quas sunt eos rerum illo delectus praesentium, facere quam! Sed?</p>
          <a href="google.com" class="btn">read more</a>
          <button class="btn">contact us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});