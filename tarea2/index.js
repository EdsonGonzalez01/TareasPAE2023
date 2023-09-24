const express = require('express')
const dotenv = require('dotenv')

const { engine } = require('express-handlebars')

dotenv.config();

const router = require('./src/routes')

const app = express()
const port = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(router)

app.listen(port, ()=>{
    console.log(`app is running in port ${port}`)
})

