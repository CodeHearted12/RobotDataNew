
const express = require('express');
const mustacheExpress = require('mustache-express');
const robot = require('./data.js');
const app = express();

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/mustache');

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.render('index', {robots: robot.users})
})

app.get('/:username', function(request, response) {
  const user = robot.users.find(function(user){return user.username === request.params.username});
  response.render('available', {robots: user});
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
