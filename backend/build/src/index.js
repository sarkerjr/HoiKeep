"use strict";
const http = require('http');
const dotenv = require('dotenv');
const app = require('./app');
dotenv.config();
const server = http.createServer(app);
server.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map