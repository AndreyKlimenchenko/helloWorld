const jwt = require('jsonwebtoken');
const jwks = require('jwks-rsa');
const {promisify} = require('util');

const jwksClient = jwks({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
});

let signingKey;
const getAccessTokenFromHeaders = (headers) => {
    const rawAutorization = headers.autorization;
    if(!rawAutorization){
        return null;
    }
    const autorizationParts = rawAutorization.split("");
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
        signingKey = key.getPublickKey();
        }catch(err){
            console.error(err);
            return null;
        }
    }

    try {
        const decoded = jwt.verify(token, signingKey);
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