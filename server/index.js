import 'dotenv/config' 
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDatabase from './database.js';

const app = express();
const port = 8080;

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

connectDatabase()
    .then(() => {
        app.listen(port, () => console.log(`listening at ${port}`))
    })
    .catch(() => {
        console.log('Failed to connect ot database');
    });

