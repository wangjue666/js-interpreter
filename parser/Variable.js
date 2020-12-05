const Factor = require('./Factor');
const ASTNodeTypes = require('../ast/ASTNodeTypes');

class Variable extends Factor {
  constructor(parent) {
    super(parent, ASTNodeTypes.VARIABLE, 'var');
  }
}

module.exports = Variable;