const Stmt = require('./Stmt.js');
const ASTNodeTypes = require('./ASTNodeTypes');

class DeclareStmt extends Stmt {
  constructor(parent) {
    super(parent, ASTNodeTypes.DECLARE_STMT, 'declare');
  }
}

module.exports = DeclareStmt;
