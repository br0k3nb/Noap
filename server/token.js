const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
    return new Promise ((resolve) => {
        jwt.sign(
            payload, 
            process.env.SECRET, 
            {algorithm: 'HS256'},
            (err, token) => {
            if (err) console.log("ERROR, INVALID TOKEN", err);
            resolve(token);
        }

        );
    })
};


module.exports = {generateToken}; 