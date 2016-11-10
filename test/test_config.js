'use strict';

// Load modules

const Code = require('code');
const Lab = require('lab');
const Path = require('path');
const Config = require('../lib/index');

//const internals = {};

// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

describe('node-config', () => {

  it('loads config from env var', (done) => {

    process.env.CONFIG = './test/config.js';
    expect(Config.get('TEST_KEY')).to.equal('testing_key');
    done();
  });

  it('returns the default if undefined', (done) => {

    expect(Config.get('TEST', 55)).to.equal(55);
    done();
  });

  it('returns the undefined if key is undefined', (done) => {

    expect(Config.get('TEST')).to.be.undefined();
    done();
  });

  it('sets the config dict', (done) => {

    Config.set('TEST33', 33);
    expect(Config.get('TEST33')).to.equal(33);
    done();
  });
});

describe('node-config defaults', () => {
  it('uses a default directory', (done) => {

    delete process.env.CONFIG;
    delete require.cache[require.resolve('../lib/index')];
    let Conf = require('../lib/index');
    expect(Conf.get('TEST_KEY')).to.equal(undefined);
    done();
  });
});

describe('node-config absolute', () => {
  it('loads the config from absolute path', (done) => {

    process.env.CONFIG = Path.join(process.cwd(), 'test/config.js');
    delete require.cache[require.resolve('../lib/index')];
    let Conf = require('../lib/index');
    expect(Conf.get('TEST_KEY')).to.equal('testing_key');
    done();
  });
});
