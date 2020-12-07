const Stmt = require('./Stmt.js');
const ASTNodeTypes = require('./ASTNodeTypes');

// 函数语句块
class FunctionDeclareStmt extends Stmt {
  constructor() {
    super(ASTNodeTypes.FUNCTION_DECLARE_STMT, 'function define');
  }
}

module.exports = FunctionDeclareStmt