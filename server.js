const express = require('express');
const drone = require('./drone.js');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
})
app.post('/kill', function(req, res) {
    drone.kill();
    res.render('index');
});
app.post('/fly', function(req, res){
    drone.fly();
    res.render('index');
});

app.listen(3000, function () {
    console.log('Listening on port 3000!')
})