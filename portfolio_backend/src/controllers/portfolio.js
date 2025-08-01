'use strict';

const projectsService = require('../services/projects');
const skillsService = require('../services/skills');
const aboutService = require('../services/about');
const contactMessagesService = require('../services/contactMessages');

/**
 * Validation helpers for contact form.
 */
function isNonEmpty(value) {
  return typeof value === 'string' && value.trim().length > 0;
}
function isValidEmail(email) {
  // Simple RFC 5322 regex subset for demonstration
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// PUBLIC_INTERFACE
class PortfolioController {
  // PUBLIC_INTERFACE
  /** GET /projects */
  getProjects(req, res) {
    const projects = projectsService.getAll();
    return res.status(200).json(projects);
  }

  // PUBLIC_INTERFACE
  /** GET /skills */
  getSkills(req, res) {
    const skills = skillsService.getAll();
    return res.status(200).json(skills);
  }

  // PUBLIC_INTERFACE
  /** GET /about */
  getAbout(req, res) {
    const about = aboutService.getAbout();
    if (!about) {
      return res.status(404).json({ message: 'About info not found' });
    }
    return res.status(200).json(about);
  }

  // PUBLIC_INTERFACE
  /** POST /contact */
  postContact(req, res) {
    const { name, email, message } = req.body;

    // Validation
    const errors = {};
    if (!isNonEmpty(name)) {
      errors.name = 'Name is required';
    }
    if (!isValidEmail(email)) {
      errors.email = 'A valid email is required';
    }
    if (!isNonEmpty(message)) {
      errors.message = 'Message is required';
    }
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        message: 'Validation failed',
        errors
      });
    }

    // Save message (in-memory)
    const saved = contactMessagesService.addMessage({ name, email, message });
    return res.status(201).json({
      message: 'Contact message submitted',
      id: saved.id,
      timestamp: saved.timestamp
    });
  }
}

module.exports = new PortfolioController();
