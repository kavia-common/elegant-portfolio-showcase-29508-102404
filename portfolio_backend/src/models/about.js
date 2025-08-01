'use strict';

/**
 * @typedef {Object} About
 * @property {string} name - User's display name
 * @property {string} title - Headline/title
 * @property {string} description - About section description (supports markdown/HTML)
 * @property {string} [profileImageUrl] - URL of profile image (optional)
 * @property {string[]} [links] - List of additional links (optional)
 */

// PUBLIC_INTERFACE
class About {
  /**
   * About data constructor.
   * @param {Object} data
   */
  constructor({ name, title, description, profileImageUrl, links }) {
    this.name = name;
    this.title = title;
    this.description = description;
    this.profileImageUrl = profileImageUrl || null;
    this.links = Array.isArray(links) ? links : [];
  }
}

module.exports = About;
