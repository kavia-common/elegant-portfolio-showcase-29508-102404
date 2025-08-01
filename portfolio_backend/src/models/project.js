'use strict';

/**
 * @typedef {Object} Project
 * @property {string} id - Unique project identifier (UUID or slug)
 * @property {string} title - Project title
 * @property {string} description - Detailed project description
 * @property {string[]} technologies - Technologies used in the project
 * @property {string} imageUrl - Link to project image/thumbnail
 * @property {string} projectUrl - Link to live project or repo
 */

// PUBLIC_INTERFACE
class Project {
  /**
   * Project data constructor.
   * @param {Object} data
   */
  constructor({ id, title, description, technologies, imageUrl, projectUrl }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.technologies = Array.isArray(technologies) ? technologies : [];
    this.imageUrl = imageUrl;
    this.projectUrl = projectUrl;
  }
}

module.exports = Project;
