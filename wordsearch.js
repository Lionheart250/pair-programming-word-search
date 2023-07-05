const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const lowerCaseWord = word.toLowerCase();

    for (let l of horizontalJoin) {
        if (l.toLowerCase().includes(lowerCaseWord)) return true
    }
    return false;
};

module.exports = wordSearch