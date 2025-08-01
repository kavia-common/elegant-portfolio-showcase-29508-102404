'use strict';

const Project = require('../models/project');
const { v4: uuidv4 } = require('uuid');

/**
 * In-memory service for portfolio projects.
 * Provides CRUD-like methods; replace array with DB calls for persistence.
 */
// PUBLIC_INTERFACE
class ProjectsService {
  constructor() {
    /** @type {Project[]} */
    this.projects = [];
    // Seed with example data if desired
  }

  // PUBLIC_INTERFACE
  getAll() {
    /** Returns all projects. */
    return this.projects;
  }

  // PUBLIC_INTERFACE
  getById(id) {
    /** Returns project by id or null. */
    return this.projects.find(p => p.id === id) || null;
  }

  // PUBLIC_INTERFACE
  addProject(data) {
    /** Adds new project and returns it. */
    const id = data.id || uuidv4();
    const project = new Project({ ...data, id });
    this.projects.push(project);
    return project;
  }

  // PUBLIC_INTERFACE
  updateProject(id, updates) {
    /** Updates a project by id, returns updated or null. */
    const idx = this.projects.findIndex(p => p.id === id);
    if (idx === -1) return null;
    const updated = Object.assign(this.projects[idx], updates);
    return updated;
  }

  // PUBLIC_INTERFACE
  deleteProject(id) {
    /** Deletes project by id. Returns true if deleted. */
    const i = this.projects.findIndex(p => p.id === id);
    if (i === -1) return false;
    this.projects.splice(i, 1);
    return true;
  }
}

module.exports = new ProjectsService();
