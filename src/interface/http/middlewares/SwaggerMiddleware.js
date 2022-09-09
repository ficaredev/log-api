import SwaggerUi from 'swagger-ui-express';

import Info from '../../../../config/Info.js';

export default ({ activityRoutes, swaggerDocGenerator }) => {
    const routes = [].concat(activityRoutes);

    const options = {
        title: Info.serviceLabel,
        version: Info.version,
        description: Info.description,
    };

    const swaggerDoc = swaggerDocGenerator.generateSwagger(routes, options);

    return [SwaggerUi.serve, SwaggerUi.setup(swaggerDoc)];
};
