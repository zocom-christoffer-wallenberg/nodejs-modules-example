const express = require('express');
const database = require('./database-operations');

const router = express.Router();

router.get('/', (request, response) => {
    const insults = database.getInsults();
    response.send(JSON.stringify(insults));
});

module.exports = router;