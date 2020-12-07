const Stmt = require('./Stmt.js');
const ASTNodeTypes = require('./ASTNodeTypes');

class Block extends Stmt {   //语句块类
  constructor(parent) {
    super(parent, ASTNodeTypes.BLOCK, 'block');
  }
}

module.exports = Block;