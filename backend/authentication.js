const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.cookies.token; // Assuming token is stored in cookies
    const secretKey = 'jwt_secret_key';

    if (!token) {
        return res.status(401).send('Unauthorized: No token provided');
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).send('Forbidden: Invalid token');
        }
        req.user = decoded;
        next(); // Proceed to the next middleware or route handler
    });
};

module.exports = authenticateToken;