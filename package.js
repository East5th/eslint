Package.describe({
  name: 'east5th:eslint',
  version: '0.0.1',
  summary: 'Exports eslint global to server',
  git: 'https://github.com/East5th/eslint.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('eslint.js');
  epi.export('eslint', 'server');
});

Npm.depends({
  eslint: '0.24.1'
});