// DEMO ONLY: intentionally vulnerable. SQL injection via string concatenation.
function findUserQuery(username) {
  return "SELECT * FROM users WHERE name = '" + username + "'";
}

// DEMO ONLY: command injection
const { exec } = require('child_process');
function pingHost(host, cb) {
  exec('ping -c 1 ' + host, cb);
}

module.exports = { findUserQuery, pingHost };
