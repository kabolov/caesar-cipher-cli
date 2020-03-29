const { Transform } = require('stream');

const { caesarShiftEncode } = require('./index');

class CaesarTransform extends Transform {
  constructor(shift, action) {
    super();
    this.shift = shift;
    this.action = action;
  }

  _transform(chunk, enc, done) {
    this.push(
      `${caesarShiftEncode(chunk.toString(), this.shift, this.action)}\n`
    );
    done();
  }
}

module.exports = CaesarTransform;
