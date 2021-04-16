const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const database = lowdb(adapter);

function initiateDatabase() {
    const hasDatabase = database.has('insults').value();

    if (!hasDatabase) {
        database.defaults({ insults: [] }).write();
    }
};

function getInsults() {
    return database.get('insults').value();
}

exports.initiateDatabase = initiateDatabase;
exports.getInsults = getInsults;