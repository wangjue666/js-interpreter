// 异常处理的类

class LexicalException extends Error {
    constructor(msg){
        super(msg)
    }
    static fromChar(c){
        return new LexicalException(`unexprected char ${c}`)
    }
}


module.exports = LexicalException