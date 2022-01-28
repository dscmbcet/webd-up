const express=require('express')
const exphbs=require('express-handlebars')
const routes=require('./routes/taskRoutes')
const app=express();

app.engine('hbs', exphbs.engine({extname:'hbs'}));
app.set('view engine', 'hbs');

app.use('/',routes)  //middleware


app.listen(5000,()=> console.log("Server Started"))