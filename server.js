var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require ('body-parser');
    
var app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hello world');
});

app.get('/getNote', function(req,res) {
  res.sendFile('/test.json', 'utf-8', function(err) {
    if(err) throw err;
      res.send(data);
  });
});

app.post('/updateNode/:note', function(req, res) {
    fs.readFile('./test.json', 'utf-8', function(err, content) {
        var fileContent = JSON.parse(content);
        
        fileContent.menu.popup.menuitem.push({
            value: req.params.note,
            onClick: "test()"
        });

fs.writeFile('./test.json', JSON.stringify(fileContent,null,2), function(err) {
        if(err) throw err;
        
    res.send('file updated');
        });
    });
});

app.use(function(rex, req, next) {
    res.status(404).send('Wybacz nie mogliśmy odnaleźć, tego czego szukasz!');
});

var server = app.listen(3000, function() {
    console.log('Przykładowa aplikacja nasłuchuje na ftp://localhost:3000');
});