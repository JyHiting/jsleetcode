/**
 * Initialize your data structure here.
 */
var Trie = function () {
    //根节点
    this.root = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let curNode = this.root
    for (let i = 0; i < word.length; i++) {
        let letter = word[i]
        if (!curNode[letter]) {
            curNode[letter] = {}
        }
        curNode = curNode[letter]
    }
    curNode.isEnd = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let curNode = this.root
    for (let i = 0; i < word.length; i++) {
        let letter = word[i]
        if (curNode[letter]) {
            curNode = curNode[letter]
        } else {
            return false
        }
    }
    return curNode.isEnd ? true : false
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let curNode = this.root
    for (let i = 0; i < prefix.length; i++) {
        let letter = prefix[i]
        if (curNode[letter]) {
            curNode = curNode[letter]
        } else {
            return false
        }
    }
    return true
};


var obj = new Trie()
obj.insert("app")
obj.insert("apple")
obj.insert("beer")
obj.insert("add")
obj.insert("jam")
obj.insert("rental")

var param_2 = obj.search("apps")
// var param_3 = obj.startsWith(prefix)


// ["Trie", "insert", "insert", "insert", "insert", "insert", "insert", "search", "search", "search", "search", "search", "search", "search", "search", "search", "startsWith", "startsWith", "startsWith", "startsWith", "startsWith", "startsWith", "startsWith", "startsWith", "startsWith"]
// [[], ["app"], ["apple"], ["beer"], ["add"], ["jam"], ["rental"], ["apps"], ["app"], ["ad"], ["applepie"], ["rest"], ["jan"], ["rent"], ["beer"], ["jam"], ["apps"], ["app"], ["ad"], ["applepie"], ["rest"], ["jan"], ["rent"], ["beer"], ["jam"]]

