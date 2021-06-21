const Airtable = require('airtable');

Airtable.configure({
    apiKey: 'keyhge90gGlie1MHg',
});
const base = Airtable.base('appUktO6kMOEHMMnf');
const table = base.table('Table1');

exports.handler = async (event) => {
    const records = await table.select({}).firstPage();

    return {
        statusCode: 200,
        body: JSON.stringify(records),
    };
};