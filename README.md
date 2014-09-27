# object-emitter-only
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Proxy object values to only expose emitter methods. Normalizes objects based off
`EventDispatcher`. Leverages [`event-accessor`](https://github.com/yoshuawuyts/event-accessor)
and [`object-apply`](https://github.com/yoshuawuyts/object-apply) to do the
transformation.

## Installation
```bash
$ npm i --save object-emitter-only
```

## Overview
```js
var emitterProxy = require('object-emitter-only');
var Emitter = require('events').EventEmitter;

var impureObject = new Emitter();
impureObject.foo = 'strip me away!';

emitterProxy({
  foo: new Emitter(),
  bar: impureObject
});

// all values returned by `emitterProxy` now only expose `emitter` functions.
```

## License
[MIT](https://tldrlegal.com/license/mit-license) ©
[Yoshua Wuyts](yoshuawuyts.com)

[npm-image]: https://img.shields.io/npm/v/object-emitter-only.svg?style=flat-square
[npm-url]: https://npmjs.org/package/object-emitter-only
[travis-image]: https://img.shields.io/travis/yoshuawuyts/object-emitter-only.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/object-emitter-only
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/object-emitter-only.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/object-emitter-only?branch=master
