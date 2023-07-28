// third party imports
import express from 'express';
import compression from 'compression';

// project imports
import cors from './utils/cors';
import helmet from './utils/helmet';
import morgan from './utils/morgan';
import routes from '@routes/index';

const app = express();

/* express settings */

app.use(cors()); // enable cors
app.use(helmet()); // set security headers
app.disable('x-powered-by'); // hide powered by express
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(morgan()); // log api requests
app.use(compression()); // compress to level -1

// add public folder
app.use(express.static('public'));

app.use('/api', routes); // add app routes here

export default app;
