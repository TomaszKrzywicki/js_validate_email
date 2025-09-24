'use strict';

/**
 * @param {string} email
 * @returns {boolean}
 */
function validateEmail(email) {
  const parts = email.split('@');

  if (parts.length !== 2) {
    return false;
  }

  const [personal, domain] = parts;

  if (!personal || personal.startsWith('.') || personal.endsWith('.')) {
    return false;
  }

  if (/\.{2,}/.test(personal)) {
    return false;
  }

  if (!/^[A-Za-z0-9._-]+$/.test(personal)) {
    return false;
  }

  if (/[!$%&'*+/=?^{}|~]/.test(personal)) {
    return false;
  }

  if (!domain || domain.startsWith('.') || domain.endsWith('.')) {
    return false;
  }

  if (!/^[A-Za-z0-9.-]+$/.test(domain)) {
    return false;
  }

  if (!domain.includes('.')) {
    return false;
  }

  return true;
}

module.exports = validateEmail;
