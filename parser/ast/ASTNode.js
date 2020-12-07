class AstNode{
    constructor(_parent, _type=null, _label=null){
        this.children = []
        this.parent = _parent

        this.lexeme = null
        this.type = _type
        this.label = _label
    }

    getChild(index){
        return this.children[index]
    }

    addChild(node){
        this.children.push(node)
    }

    //获取词法单元
    getLexeme(){
        return this.lexeme
    }

    getChildren(){
        return this.children
    }
    print(indent = 0) {
        console.log(`${''.padStart(indent * 2, ' ')}${this.label}`);
        this.children.forEach(x => x.print(indent + 1));
    }
}


module.exports = AstNode