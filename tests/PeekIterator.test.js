const PeekIterator = require('../common/PeekIterator')
const arrayToGenerator = require("../common/arrayToGenerator")

const { assert } = require('chai')


describe('test PeekIterator', () => {
    it('test_peek', () => {
        const it = new PeekIterator(arrayToGenerator([...'abcdefg']))
        assert.equal(it.next(), 'a')
        assert.equal(it.next(), 'b')
        assert.equal(it.next(), 'c')
        assert.equal(it.peek(), 'd')
        assert.equal(it.peek(), 'd')
        assert.equal(it.next(), 'd')
    })

    it('test_putBack', () => {
        const it = new PeekIterator(arrayToGenerator([...'1+2']))
        assert.equal(it.next(), '1')
        assert.equal(it.next(), '+')
        assert.equal(it.peek(), '2')
        it.putBack()
        assert.equal(it.peek(), '+')
        assert.equal(it.next(), '+')
    })
    it('test_lookahead2', () => {
        const it = new PeekIterator(arrayToGenerator([...'abcdefg']))
        assert.equal(it.next(), 'a')
        assert.equal(it.peek(), 'b')
        assert.equal(it.peek(), 'b')
        assert.equal(it.next(), 'b')
        assert.equal(it.next(), 'c')
        it.putBack()
        it.putBack()
        assert.equal(it.next(), 'b')
        assert.equal(it.next(), 'c')
        assert.equal(it.next(), 'd')
    })

    it('test_endToken', () => {
        const it = new PeekIterator(arrayToGenerator([...'abcdefg']), '\0')
        for (let i = 0; i < 8; i++) {
            if (i === 7) {
                assert.equal(it.next(), '\0')
            } else {
                assert.equal(it.next(), 'abcdefg'[i])
            }
        }
    })
})