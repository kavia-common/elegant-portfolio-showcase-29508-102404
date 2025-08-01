'use strict';

const ContactMessage = require('../models/contactMessage');
const { v4: uuidv4 } = require('uuid');

/**
 * In-memory service for contact messages.
 */
// PUBLIC_INTERFACE
class ContactMessagesService {
  constructor() {
    /** @type {ContactMessage[]} */
    this.messages = [];
  }

  // PUBLIC_INTERFACE
  getAll() {
    return this.messages;
  }

  // PUBLIC_INTERFACE
  getById(id) {
    return this.messages.find(m => m.id === id) || null;
  }

  // PUBLIC_INTERFACE
  addMessage(data) {
    const id = data.id || uuidv4();
    const msg = new ContactMessage({ ...data, id });
    this.messages.push(msg);
    return msg;
  }

  // PUBLIC_INTERFACE
  deleteMessage(id) {
    const idx = this.messages.findIndex(m => m.id === id);
    if (idx !== -1) {
      this.messages.splice(idx, 1);
      return true;
    }
    return false;
  }
}

module.exports = new ContactMessagesService();
