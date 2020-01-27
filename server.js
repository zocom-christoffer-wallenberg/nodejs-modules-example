const express = require('express');
const app = express();
const database = require('./modules/database-operations');
const port = process.env.PORT || 8000;

app.get('/getInsults', (request, response) => {
    const insults = database.getInsults();
    response.send(JSON.stringify(insults));
});

app.listen(port, () => {
    console.log('Server started on port: ', port);
    database.initiateDatabase();
});