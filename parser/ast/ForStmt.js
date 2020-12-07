const Stmt = require("./Stmt.js");
const ASTNodeType = require("./ASTNodeType");

class ForStmt extends Stmt {  //for 语句
  constructor(parent) {
    super(parent, ASTNodeType.FOR_STMT, "for");
  }
}

module.exports = ForStmt;
