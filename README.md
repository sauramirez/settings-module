# Settings module
Load config files from the CONFIG environment variable.

## Using settings-module
Node config is very simple. You set the filepath to the `CONFIG`
environment variable and settings-module will load it for you.

```js
// config.js
exports.API_KEY = 'TEST';

// lib/index.js
// process.env.CONFIG = ./config.js
const Config = require('settings-module');
Config.get('API_KEY');
```
