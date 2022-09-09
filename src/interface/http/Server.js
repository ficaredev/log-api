import AwilixExpress from 'awilix-express';
import Express from 'express';
import Helmet from 'helmet';
import NoCache from 'nocache';

export default ({ config, router, logger, container }) => ({
    start: () => {
        const app = Express()
            .use(Helmet())
            .use(AwilixExpress.scopePerRequest(container))
            .use(NoCache())
            .use(router);

        const server = app;

        return new Promise((resolve) => {
            const s = server.listen(config.web.port, () => {
                const { port } = s.address();
                logger.info(`[p ${process.pid}] Listening at port ${port}`);
                resolve();
            });
        });
    },
});
