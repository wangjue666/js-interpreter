const ASTNode = require('./ASTNode');

class Stmt extends ASTNode { //语句类
  constructor(type, label) {
    super(type, label);
  }
}

module.exports = Stmt;

