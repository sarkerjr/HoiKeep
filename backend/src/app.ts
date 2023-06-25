// third party imports
import express from 'express';
import compression from 'compression';

// project imports
// import cors from '@utils/cors.js';
// import helmet from '@/utils/helmet.js';
// import morgan from '@/utils/morgan.js';
import routes from '@routes/index';

const app = express();

/* express settings */

// app.use(cors());
// app.use(helmet()); // set security headers
app.disable('x-powered-by'); // hide powered by express
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

// app.use(morgan()); // log api requests
app.use(compression()); // compress to level -1

// add public folder
app.use(express.static('public'));

app.use('/api', routes); // add app routes here

export default app;
