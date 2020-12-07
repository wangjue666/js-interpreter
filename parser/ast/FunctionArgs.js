const ASTNode = require('./ASTNode');
const ASTNodeTypes = require('./ASTNodeTypes');

class FunctionArgs extends ASTNode {
  constructor() {
    super(ASTNodeTypes.FUNCTION_ARGS, 'args');
  }
}

module.exports = FunctionArgs
