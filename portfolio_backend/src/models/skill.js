'use strict';

/**
 * @typedef {Object} Skill
 * @property {string} name - Name of the skill
 * @property {string} [category] - Category of the skill (e.g., 'frontend', 'backend', etc.)
 * @property {number} [proficiency] - Proficiency level (0-100)
 */

// PUBLIC_INTERFACE
class Skill {
  /**
   * Skill data constructor.
   * @param {Object} data
   */
  constructor({ name, category, proficiency }) {
    this.name = name;
    this.category = category || null;
    this.proficiency = typeof proficiency === 'number' ? proficiency : null;
  }
}

module.exports = Skill;
