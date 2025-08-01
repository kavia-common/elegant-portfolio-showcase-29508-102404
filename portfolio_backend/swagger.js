const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Express API',
      version: '1.0.0',
      description: 'A simple Express API documented with Swagger',
    },
    components: {
      schemas: {
        Project: {
          type: 'object',
          properties: {
            id: { type: 'string', description: 'Unique project identifier (UUID or slug)' },
            title: { type: 'string', description: 'Project title' },
            description: { type: 'string', description: 'Detailed project description' },
            technologies: {
              type: 'array',
              items: { type: 'string' },
              description: 'Technologies used in the project',
            },
            imageUrl: { type: 'string', description: 'Link to project image/thumbnail' },
            projectUrl: { type: 'string', description: 'Link to live project or repo' }
          },
          required: ['id', 'title', 'description', 'technologies', 'imageUrl', 'projectUrl']
        },
        Skill: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Name of the skill' },
            category: { type: 'string', description: 'Category of the skill (optional)' },
            proficiency: { type: 'integer', description: 'Proficiency level (0-100, optional)' }
          },
          required: ['name']
        },
        About: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'User\'s display name' },
            title: { type: 'string', description: 'Headline/title' },
            description: { type: 'string', description: 'About section description' },
            profileImageUrl: { type: 'string', description: 'URL of profile image (optional)' },
            links: {
              type: 'array',
              items: { type: 'string' },
              description: 'Additional links (optional)'
            }
          },
          required: ['name', 'title', 'description']
        }
      }
    }
  },
  apis: ['./src/routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
