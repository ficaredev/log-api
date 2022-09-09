export default ({ config }) =>
    async (req, res, next) => {
        if (!config.environment === 'production') next();

        const token = req.headers['token'];

        if (!token) res.status(401).send('Unauthorized');

        next();
    };
