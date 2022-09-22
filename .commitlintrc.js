process.env.GITMOJI_PATH = '.gitmojis.json';
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // extends: ['gitmoji'],
  rules: {}
};
