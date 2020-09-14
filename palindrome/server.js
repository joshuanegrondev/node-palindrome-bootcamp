const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(params)
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) { //get HTML file
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/api') {
    let answer;
    if('reversedInput' in params){
      let input = params['reversedInput'] //regular input
      let reversedInput = input.split('').reverse().join(''); //split('') = splits the input into letters
       (input === reversedInput) ? answer = 'Palindrome' :  answer = 'Not a palindrome';
       }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(JSON.stringify(answer));
  }else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
