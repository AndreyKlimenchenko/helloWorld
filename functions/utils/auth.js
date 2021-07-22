const jwt = require('jsonwebtoken');
const jwks = require('jwks-rsa');
const {promisify} = require('util');

const jwksClient = jwks({
    jwksUri: 'https://learn-build-type-jqq.eu.auth0.com/.well-known/jwks.json'
});

let signingKey;
const getAccessTokenFromHeaders = (headers) => {
    const rawAutorization = headers.authorization;
    if(!rawAutorization){
        return null;
    }
    const autorizationParts = rawAutorization.split(" ");
    if(autorizationParts[0] !== "Bearer" || autorizationParts.length !== 2){
        return null;
    }
    const accessToken = autorizationParts[1];
    return accessToken;
};

const validateAccessToken = async (token) => {
    if(!signingKey){
        try {
        const getSigningKey = promisify(jwksClient.getSigningKey);
        const key = await getSigningKey(process.env.AUTH0_KEY_ID);
        signingKey = key.getPublicKey();
        }catch(err){
            console.error(err);
            return null;
        }
    }

    try {
        const decoded = jwt.decode(token, signingKey);
        return decoded;
    }catch(err){
        console.error(err);
        return null;
    }

};

module.exports = {
    getAccessTokenFromHeaders,
    validateAccessToken,
};