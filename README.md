# node-config
Load config files from the CONFIG environment variable.

## Using node-config
Node config is very simple. You set the filepath to the `CONFIG`
environment variable and node-config will load it for you.

```js
// config.js
module.exports = {
  API_KEY: 'TEST'
};

// lib/index.js
// process.env.CONFIG = ./config.js
const Config = require('node-config');
Config.get('API_KEY');
```
