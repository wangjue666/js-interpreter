
//使用链表来当栈数据结构
const LinkedList = require('linkedlist')

const CACHE_SIZE = 10

class PeekIterator {
    constructor(it, endToken = null) {
        this.it = it
        // 需要putBack的元素
        this.stackPutBacks = new LinkedList()
        // 基于时间窗口的缓存 保存已处理的节点
        this.queueCache = new LinkedList()
        this.endToken = endToken
    }
    // 提前瞅下 下一个要处理的节点
    peek(){
        if(this.stackPutBacks.length > 0){
            return this.stackPutBacks.head
        }
        // 取出迭代对象下个节点 
        const val = this.next()
        this.putBack()
        return val
    }
    // 从时间窗口拿出最后一个节点执行压栈操作 相当于上一个处理过的节点 再给它放回去
    putBack(){
        if(this.queueCache.length > 0){
            this.stackPutBacks.push(this.queueCache.pop())
        }
    }

    hasNext(){
        return this.endToken || Boolean(this.peek())
    }
    // 将栈的首结点返回出去,
    next(){
        let val = null
        if(this.stackPutBacks.length > 0){
            val = this.stackPutBacks.pop()
        }else{
            val = this.it.next().value
            if(val === undefined){
                const tmp = this.endToken
                this.endToken = null
                return tmp
            }
        }
        // 处理缓存
        while(this.queueCache.length >=  CACHE_SIZE){
            this.queueCache.shift()
        }
        //每处理完一个节点 塞到时间窗口去
        this.queueCache.push(val)
        return val
    }
}

module.exports = PeekIterator
