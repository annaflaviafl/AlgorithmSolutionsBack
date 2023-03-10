import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';

const swaggerDocument = YAML.load('src/api.yaml');

export { swaggerUi, swaggerDocument };