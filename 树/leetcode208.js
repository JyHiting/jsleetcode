/**
 * Initialize your data structure here.
 */
var Trie = function () {

    //obj里面的key对应的value就是一个节点
    //节点数组
    this.nodes = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {

    let curNode = this.nodes
    for (const char of word) {
        //去curNode中找对应字母的节点是否存在
        if (curNode.char == null) {
            //不存在创建一个
            curNode.char = {}
        }
        curNode = curNode.char
    }
    curNode.isEnd = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {

    let curNode = this.nodes
    for (const char of word) {
        if (curNode.char == null) {
            return false
        }
        curNode = curNode.char
    }
    return curNode.isEnd
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {

    let curNode = this.nodes
    for (const char of prefix) {
        if (curNode.char == null) {
            return false
        }
        //检查下一个字母
        curNode = curNode.char
    }
    return true
};


let word = "word"
let prefix = "wo"

var obj = new Trie()
obj.insert(word)
var param_2 = obj.search(word)
var param_3 = obj.startsWith(prefix)


