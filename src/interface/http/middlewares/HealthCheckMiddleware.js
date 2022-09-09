import { Router } from 'express';

export default () => ({
    healthcheck: () => {
        const router = Router();

        return router.get('/healthcheck', (_, res) => res.send());
    },
});
