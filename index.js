/*
 * This file is part of the broccoli-callback npm package. Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at https://choosealicense.com/licenses/mit.
 */

const Plugin = require("broccoli-plugin");

module.exports = class Generator extends Plugin{
  constructor(name, nodes, callback, options = {}){
    super(nodes, {name});
    this.callback = callback;
    this.options = options;
  }

  build(){
    if(typeof this.callback !== "function")
      return false;

    return this.callback(this, this.options);
  }
};
