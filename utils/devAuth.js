function devAuth(req, res, next) {
    if(!req.header('Authorization') || req.header('Authorization') !== process.env.DEV_AUTH) {
        return res.status(401).json({message: 'Unauthorized: This is a developer-only endpoint.'});
    }
    next();
}


module.exports = { devAuth };