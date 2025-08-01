const express = require('express');
const healthController = require('../controllers/health');
const portfolioController = require('../controllers/portfolio');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Health
 *     description: Health check endpoint
 *   - name: Projects
 *     description: Portfolio projects
 *   - name: Skills
 *     description: Skills listing
 *   - name: About
 *     description: About/biography
 *   - name: Contact
 *     description: Contact messages
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Health endpoint
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Service health check passed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: Service is healthy
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 environment:
 *                   type: string
 *                   example: development
 */
router.get('/', healthController.check.bind(healthController));

/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Get all projects
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: List of projects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 */
router.get('/projects', portfolioController.getProjects.bind(portfolioController));

/**
 * @swagger
 * /skills:
 *   get:
 *     summary: Get all skills
 *     tags: [Skills]
 *     responses:
 *       200:
 *         description: List of skills
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Skill'
 */
router.get('/skills', portfolioController.getSkills.bind(portfolioController));

/**
 * @swagger
 * /about:
 *   get:
 *     summary: Get about section
 *     tags: [About]
 *     responses:
 *       200:
 *         description: About section data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/About'
 *       404:
 *         description: About info not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: About info not found
 */
router.get('/about', portfolioController.getAbout.bind(portfolioController));

/**
 * @swagger
 * /contact:
 *   post:
 *     summary: Submit a contact message
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - message
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *                 description: "Sender's name"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john@example.com"
 *                 description: "Sender email"
 *               message:
 *                 type: string
 *                 example: "Hello, I would like to connect with you."
 *                 description: "The contact message"
 *     responses:
 *       201:
 *         description: Contact message submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Contact message submitted
 *                 id:
 *                   type: string
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 errors:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *                     message:
 *                       type: string
 */
router.post('/contact', portfolioController.postContact.bind(portfolioController));

module.exports = router;
