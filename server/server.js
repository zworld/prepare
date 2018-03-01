const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require("fs")

function resolve(dir) {
  return path.join(__dirname, '../web', dir)
}

const argv = process.argv;
const host = argv[2] || '127.0.0.1';
const port = argv[3] || 8090;

const http = require('http').Server(app);
http.listen(port, function(err) {
     if (err) {
        console.error(err);
        return;
     }
    console.log(`Listening at http://${host}:${port}`);
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use('/js', express.static(resolve('dist/js')));
// app.use('/css', express.static(resolve('dist/css')));
// app.use('/img', express.static(resolve('dist/img')));
// app.use('/data', express.static(resolve('dist/data')));

app.get('/*', function(req, res){

  fs.exists(resolve(`/${req.path}`), (exists) => {
    if(exists){
      res.sendFile(resolve(`/${req.path}`));
    }else{
      res.sendFile(resolve(`/index.html`));
    }
  });
});

app.use(/\/api.*/,function(req, res){
    res.header("Access-Control-Allow-Origin","*");
    var arg = req.body;
    console.log(arg,req.originalUrl)
    res.json(arg);
});