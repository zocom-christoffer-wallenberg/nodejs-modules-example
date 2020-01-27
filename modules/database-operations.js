const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const database = lowdb(adapter);

exports.initiateDatabase = () => {
    const hasDatabase = database.has('insults').value();

    if (!hasDatabase) {
        database.defaults({ insults: [] }).write();
    }
};

exports.getInsults = () => {
    return database.get('insults').value();
}