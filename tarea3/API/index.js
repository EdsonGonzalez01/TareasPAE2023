const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerConfig = require('./swagger.config');

const router = require('./src/routes');

const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};
  
const app = express()
const port = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(router);

//Create swagger endpoint
const swaggerDoc = swaggerJsDoc(swaggerConfig);
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDoc));


//Connect to MongoDB
mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true } ).
then((err)=>{
    console.log('Connected to database');
    app.listen(port, ()=>{
        console.log(`app is running in port ${port}`)
    })
}).catch(err => {
    console.log("Failed to connect to DB", err)
})

