'use strict';

const About = require('../models/about');

/**
 * In-memory service for About section.
 * Assumes a single profile/about info object.
 */
// PUBLIC_INTERFACE
class AboutService {
  constructor() {
    /** @type {About|null} */
    this.about = null;
  }

  // PUBLIC_INTERFACE
  getAbout() {
    return this.about;
  }

  // PUBLIC_INTERFACE
  setAbout(data) {
    this.about = new About(data);
    return this.about;
  }

  // PUBLIC_INTERFACE
  updateAbout(updates) {
    if (!this.about) return null;
    Object.assign(this.about, updates);
    return this.about;
  }
}

module.exports = new AboutService();
