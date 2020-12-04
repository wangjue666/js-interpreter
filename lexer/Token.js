const TokenType = require("./TokenType")
const AlphabetHelper = require('./AlphabetHelper')
const LexicalException = require("./LexicalException")
//关键字
const Keywords = new Set([
    'var',
    'if',
    'else',
    'for',
    'break',
    'while',
    'func',
    'return'
])

class Token {
    constructor(type, value) {
        this._type = type
        this._value = value
    }
    getType() {
        return this._type
    }
    getValue(){
        return this._value
    }
    //是否是变量
    isVariable() {
        return this._type === TokenType.VARIABLE
    }
    //是否是标量
    isScalar() {
        return this._type === TokenType.INTEGER ||
            this._type === TokenType.FLOAT ||
            this._type === TokenType.STRING ||
            this._type === TokenType.BOOLEAN
    }
    toString() {
        return `type ${this._type.type}, value ${this._type.value}`
    }

    //校验是变量名还是关键字
    static makeVarOrKeyword(it) {
        let s = ''

        while (it.hasNext()) {
            const c = it.peek()
            if (AlphabetHelper.isLiteral(c)) {
                s += c
            } else {
                break
            }
            it.next()
        }

        if (Keywords.has(s)) {
            return new Token(TokenType.KEYWORD, s)
        }

        if (s == 'true' || s == 'false') {
            return new Token(TokenType.BOOLEAN, s)
        }
        return new Token(TokenType.VARIABLE, s)
    }

    static makeString(it){
        let s = ""
        let state = 0 
        
        while(it.hasNext()){
            let c = it.next()

            switch(state){
                case 0:
                    if(c === '"'){
                        state = 1
                    }else{
                        state = 2
                    }
                    s+=c
                    break;
                case 1:
                    if(c === '"'){
                        return new Token(TokenType.STRING, s+c)
                    }else{
                        s+=c
                    }    
                    break;
                case 2:
                    if(c==="'"){
                        return new Token(TokenType.STRING, s+c)
                    }else{
                        s+=c
                    }    
                    break;
            }
        }

        throw new LexicalException('Unexpected error')
    }
}


module.exports = Token