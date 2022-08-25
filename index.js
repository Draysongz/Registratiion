//Importing express 
const express =require('express');
const app = express();
const dotenv =require('dotenv')
const bodyparser= require("body-parser");
const morgan = require("morgan")
const path = require('path')
const connectDB= require('./server/db/connection')



//setting port from config.env
dotenv.config({path: 'config.env'})
let PORT = process.env.PORT||8000



//using morgan and bodyparser
app.use(morgan('tiny'))
connectDB()
app.use(bodyparser.urlencoded({extended:true}))

//setting a view engine
app.set('view engine', 'ejs')

//Getting the necesssary assets(css,images,js)
app.use('/css', express.static(path.resolve(__dirname, './assets/css/style.css')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))




app.use('/', require('./server/routes/routes'))


//listening for a port
app.listen(PORT, ()=>{
    console.log(`your app is currently running on port ${PORT}`);
})