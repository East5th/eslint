## eslint

This meteor package wraps the [ESLint](http://eslint.org/) npm package, [eslint](https://www.npmjs.com/package/eslint)@0.24.1, and exports `eslint` to the server.

ESLint can be used in a variety of ways. The most straight forward example would be to run the default rules on your Meteor project:

```
var linter = eslint.linter;
var CLIEngine = eslint.CLIEngine;

var cli = new CLIEngine({
  envs: ['meteor']
});

var files = [
  process.env.PWD + '/'
];

Meteor.startup(function() {
  var report = cli.executeOnFiles(files);
  var formatter = cli.getFormatter('tap');
  console.log(formatter(report.results));
});

```