'use strict';

const Skill = require('../models/skill');

/**
 * In-memory service for skills.
 */
// PUBLIC_INTERFACE
class SkillsService {
  constructor() {
    /** @type {Skill[]} */
    this.skills = [];
    // Seed with example data if desired
  }

  // PUBLIC_INTERFACE
  getAll() {
    return this.skills;
  }

  // PUBLIC_INTERFACE
  addSkill(data) {
    const skill = new Skill(data);
    this.skills.push(skill);
    return skill;
  }

  // PUBLIC_INTERFACE
  deleteSkillByName(name) {
    const idx = this.skills.findIndex(s => s.name === name);
    if (idx !== -1) {
      this.skills.splice(idx, 1);
      return true;
    }
    return false;
  }
}

module.exports = new SkillsService();
