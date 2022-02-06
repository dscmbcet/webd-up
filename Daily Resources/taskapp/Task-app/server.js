require('./models/db')
const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars')
var bodyParser = require('body-parser'); 

const taskController=require('./controllers/taskController');
var app=express();


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


//to set the 'views'
app.set('views',path.join(__dirname,'/views/'))
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));

app.set('view engine','hbs')

//server
app.listen(process.env.PORT,()=>{
console.log("Success")
})

app.use('/task',taskController)