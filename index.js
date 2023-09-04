require('express-async-errors');
require('dotenv').config();
const express = require('express');

const db = require('./src/database/db')
const notFoundMiddleware = require('./src/middlewares/not-found');
const errorHandlerMiddleware = require('./src/middlewares/error-handler');
const userRoutes = require('./src/routes/user_routes')

const app = express();


app.use(express.json());


app.use('/api/v1', userRoutes);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = 3000;


const start = async () => {
    try {
        await db(process.env.MONGOURL);
        app.listen(port, ()=>{
            console.log('server has started')
        });
    } catch (e) {
            console.log(e)
    }
}

start(); 