const PeekIterator = require('../../common/PeekIterator');
const ParseException = require('../util/ParseException');

class PeekTokenIterator extends PeekIterator {
  constructor(it) {
    super(it);
  }

  nextMatch(value) {
    let token = this.next();
    if (token.getValue() !== value) {
      throw ParseException.fromToken(token);
    }
    return token;
  }
  //重载nextMatch
  nextMatch1(type) {
    let token = this.next();
    if (token.getType() !== type) {
      throw ParseException.fromToken(token);
    }
    return token;
  }
}

module.exports = PeekTokenIterator;
