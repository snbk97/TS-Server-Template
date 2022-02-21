const swaggerConfig = () => ({
  swaggerDefinition: {
    info: {
      version: '1.0.0',
      title: '123 API',
      description: 'Customer API Information',
      contact: {
        name: 'Amazing Developer',
      },
      servers: [`http://localhost:${process.env.EXPRESS_PORT}/api/v1`],
    },
  },
  // ['.routes/*.js']
  apis: ['./src/controllers/**/*.ts', './src/server/index.ts'],
  // tags: ['users'],
});

export default swaggerConfig;
