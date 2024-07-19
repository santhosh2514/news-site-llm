
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const setupExpress = require('./express');
const app = setupExpress();
const port = process.env.PORT || 2356;
app.listen(port);

console.info('Application started on port', port);