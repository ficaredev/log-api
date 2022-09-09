import env from './env.js';

export default {
    loadEnvironment: () => {
        const Env = process.env.NODE_ENV || 'local';
        console.log(`Loading config for ${Env} environment`);

        return { ...env };
    },
};
