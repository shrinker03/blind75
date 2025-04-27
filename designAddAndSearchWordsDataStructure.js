/* Level => 1/5

This needs to be solved again


*/

var WordDictionary = function () {
    this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this.root;

    for (let char of word) {
        if (!node[char]) {
            node[char] = {};
        }
        node = node[char]
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {

    function dfs(j, root) {
        let node = root;
        for (let i = j; i < word.length; i++) {
            if (word[i] === '.') {
                for (let child of Object.values(node)) {
                    if (dfs(i + 1, child)) {
                        return true;
                    }
                }
                return false;
            } else {
                if (!node[word[i]]) return false;
                node = node[word[i]]
            }
        }
        return !!node.isEnd;
    }
    return dfs(0, this.root)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */