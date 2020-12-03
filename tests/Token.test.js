const Token = require('../lexer/Token')
const TokenType = require('../lexer/TokenType')
const PeekIterator = require('../common/PeekIterator')
const { assert } = require('chai')
const arrayToGenerator = require('../common/arrayToGenerator')

describe('Token', () => {
  function assertToken(token, value, type) {
    assert.equal(token.getType(), type)
    assert.equal(token.getValue(), value)
  }

  it('varOrKeyword', () => {
    let it1 = new PeekIterator(arrayToGenerator([...'if abc']))
    let it2 = new PeekIterator(arrayToGenerator([...'true abc']))

    let token1 = Token.makeVarOrKeyword(it1)
    let token2 = Token.makeVarOrKeyword(it2)
    it1.next()
    let token3 = Token.makeVarOrKeyword(it1)
    assertToken(token1, 'if', TokenType.KEYWORD)
    assertToken(token2, 'true', TokenType.BOOLEAN)
    assertToken(token3, 'abc', TokenType.VARIABLE)
  })

})