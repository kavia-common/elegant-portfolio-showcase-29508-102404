'use strict';

/**
 * @typedef {Object} ContactMessage
 * @property {string} id - Unique identifier (UUID)
 * @property {string} name - Name of person contacting
 * @property {string} email - Email address
 * @property {string} message - The contact message content
 * @property {string} [timestamp] - When the message was received (ISO string)
 */

// PUBLIC_INTERFACE
class ContactMessage {
  /**
   * ContactMessage constructor.
   * @param {Object} data
   */
  constructor({ id, name, email, message, timestamp }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.message = message;
    this.timestamp = timestamp || new Date().toISOString();
  }
}

module.exports = ContactMessage;
