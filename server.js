var express = require('express');
const bodyParser = require("body-parser");
const dbControl = require('./controlers/db.js')
var app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));

var Text = ''

app.get('/', function (req, res) {    
    res.sendFile(__dirname + '/public/index.html');
    
});
app.route('/test')
  .get(urlencodedParser, function (req, res, next) {     
    dbItems = dbControl.pushDb();
    res.send(dbItems);
    // console.log(dbItems.articles.length)
    
  })
  .post(urlencodedParser, function (req, res, next) {
    article = req.body;     
    dbControl.pushItem(article)    
})
.delete(urlencodedParser, function (req, res, next) {
    article = req.body;      
    dbControl.deleteItem(article.dataId) 
    res.send(article)
})
app.get('/article', function (req, res) {
    res.sendFile(__dirname + '/public/article.html');
});
app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');    
});
