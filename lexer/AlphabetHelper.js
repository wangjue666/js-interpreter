//断言字符是那种类型

class AlphabetHelper {
    static ptnLetter = /^[a-zA-z]$/
    static ptnNumber = /^[0-9]$/
    static pthLiteral = /^[_a-zA-Z0-9]$/
    static ptnOperator = /^[+-\\*/><=!&|^%]$/


    static isLetter(c) {
        return AlphabetHelper.ptnLetter.test(c)
    }

    static isNumber(c) {
        return AlphabetHelper.ptnNumber.test(c)
    }

    static isLiteral(c) {
        return AlphabetHelper.ptnLiteral.test(c)
    }

    static isOperator(c) {
        return AlphabetHelper.ptnOperator.test(c)
    }
}


module.exports = AlphabetHelper