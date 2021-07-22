
require('dotenv').config();
const Airtable = require('airtable');

Airtable.configure({
    apiKey: 'keyhge90gGlie1MHg',
});
const base = Airtable.base('appUktO6kMOEHMMnf');
const table = base.table('Table1');

const getHighScores = async (filterEmptyRecords) => {
    const queryOptions = {
        sort: [{ field: 'score', direction: 'desc' }],
    };
    if (filterEmptyRecords) {
        queryOptions.filterByFormula = `AND(name != "", score > 0)`;
    }
    const records = await table.select(queryOptions).firstPage();
    const formattedRecords = records.map((record) => ({
        id: record.id,
        fields: record.fields,
    }));
    return formattedRecords;
};

module.exports = {
    table,
    getHighScores,
};