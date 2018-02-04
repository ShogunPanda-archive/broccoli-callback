# broccoli-callback

[![Package Version](https://img.shields.io/npm/v/broccoli-callback.svg)](https://npmjs.com/package/broccoli-callback)
[![Dependency Status](https://img.shields.io/gemnasium/ShogunPanda/broccoli-callback.svg)](https://gemnasium.com/ShogunPanda/broccoli-callback)

https://sw.cowtech.it/broccoli-callback

A plugin to execute any code within Broccoli builds.

## Usage

Simply create a new instance of the plugin passing a callback function.

The function will receive the current [plugin](https://github.com/broccolijs/broccoli-plugin).

To execute asynchronous code in the callback, return a Promise so Broccoli will wait.

### Example

```javascript
const BroccoliCallback = require("broccoli-callback");

module.exports = return new BroccoliCallback("NAME", [/* Input Nodes, can be an empty array */], (plugin, options) => {
  return new Promise((resolve, reject) => {
    // Do something here, then resolve
  });
}, {/* Options, you can omit this */});
```

## Supported implementations.

broccoli-callback supports and has been tested on [NodeJS](http://nodejs.org) 6.0+.

## Contributing to broccoli-callback

* Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet.
* Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it.
* Fork the project.
* Start a feature/bugfix branch.
* Commit and push until you are happy with your contribution.
* Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.

## Copyright

Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.

Licensed under the MIT license, which can be found at https://choosealicense.com/licenses/mit.
