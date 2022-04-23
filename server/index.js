import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 8080;

app.listen(port, () => console.log(`listening at ${port}`))
