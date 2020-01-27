const database = require('./database-operations');

module.exports = (app) => {
    app.get('/', (request, response) => {
        response.send('<h1>Hello World!</h1>');
    });

    app.get('/getInsults', (request, response) => {
        const insults = database.getInsults();
        response.send(JSON.stringify(insults));
    });
}