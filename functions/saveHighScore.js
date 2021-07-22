const { table, getHighScores } = require('./utils/airtable');
const { getAccessTokenFromHeaders, validateAccessToken } = require('./utils/auth');
exports.handler = async (event) => {
    console.log(event)
    const token = getAccessTokenFromHeaders(event.headers);
    console.log(token)
    let user = await validateAccessToken(token);
    if(!user){
        return {
            statusCode: 401,
            body: JSON.stringify({err: 'User is not authorized'
            }),
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ err: 'That method is not allowed' }),
        };
    }
    const name = user['http://learnbuildtype/username'];
console.log(name);
    const { score } = JSON.parse(event.body);
    if (typeof score === 'undefined' || !name) {
        return {
            statusCode: 400,
            body: JSON.stringify({ err: 'Bad request' }),
        };
    }

    try {
        const records = await getHighScores(false);

        const lowestRecord = records[records.length-1];
        if (
            typeof lowestRecord.fields.score === 'undefined' ||
            score > lowestRecord.fields.score
        ) {
            const updatedRecord = {
                id: lowestRecord.id,
                fields: { name, score },
            };
            await table.update([updatedRecord]);
            return {
                statusCode: 200,
                body: JSON.stringify(updatedRecord),
            };
        } else {
            return {
                statusCode: 200,
                body: JSON.stringify({}),
            };
        }
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                err: 'Failed to save score in Airtabl',
            }),
        };
    }
};