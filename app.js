const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.port || 80) 
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use('/', express.static('public'));


app.get('/', (req, res, next) =>{
    res.render('home');
})

app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})