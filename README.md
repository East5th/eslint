This meteor package wraps the [ESLint](http://eslint.org/) npm package, [eslint](https://www.npmjs.com/package/eslint)@0.24.1, and exports `eslint` to the server.

## Installation

`meteor add east5th:eslint`

## Usage

It's recommended that you run ESLint from within a `debugOnly` package within your Meteor project. An example ESLint configuration that runs the default rules on your entire Meteor application would look like this:

```
var eslint = Package['east5th:eslint'].eslint;
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
  var formatter = cli.getFormatter();
  console.log(formatter(report.results));
});

```
