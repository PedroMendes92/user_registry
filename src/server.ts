import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import {router} from "./routes";

const app = express();

// set our application port
app.set('port', 9000);

// set morgan to log info about our requests for development use.
app.use(morgan('dev'));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use(router);

// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find this endpoint")
});

// start the express server
app.listen(app.get('port'), () => console.log(`App started on port ${app.get('port')}`) );
