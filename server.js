const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const insultRouter = require('./modules/endpoints');
const database = require('./modules/database-operations');

app.use('/api/insult', insultRouter);

app.listen(port, () => {
    console.log('Server started on port: ', port);
    database.initiateDatabase();
});