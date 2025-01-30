const palindromes = function (word) {
    const arr = word.toLocaleLowerCase().split('');
    const treatedArr = arr.map(word => word.match(/[a-z0-9]/i));
    const cleanedWord = treatedArr.join('');
    const reversedWord = treatedArr.reverse().join('');
    return cleanedWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
