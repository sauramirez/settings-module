'use strict';

const Path = require('path');

let config;

exports = module.exports = class Config {
  static _getConfig() {
    if (config === undefined) {
      let configFile = process.env.CONFIG;
      if (configFile === undefined) {
        config = {};
        return config;
      }
      if (!Path.isAbsolute(configFile)) {
        configFile = Path.join(process.cwd(), configFile);
      }
      config = require(configFile);
    }
    return config;
  }

  static get(key, _default) {
    return Config._getConfig()[key] || _default;
  }

  static set(key, value) {
    return Config._getConfig()[key] = value;
  }
};
