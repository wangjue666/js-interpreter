const Stmt = require('./Stmt.js');
const ASTNodeTypes = require('./ASTNodeTypes');

class IfStmt extends Stmt {  //if语句
  constructor(parent) {
    super(parent, ASTNodeTypes.IF_STMT, 'if');
  }
}

module.exports = IfStmt;
