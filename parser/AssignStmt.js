const Stmt = require('./Stmt.js');
const ASTNodeTypes = require('./ASTNodeTypes');

class AssignStmt extends Stmt {
  constructor() {
    super(ASTNodeTypes.ASSIGN_STMT, 'assign');
  }
}

module.exports = AssignStmt;
