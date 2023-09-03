require('dotenv').config();
const express = require('express');

const db = require('./src/database/db')

const app = express();


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