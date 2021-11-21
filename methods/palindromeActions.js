var functions = {
    getPalindromes: function(number) {
        palindromes = []
        for (i = 0; i <= number; i++) {
            reverse = reverseNumber(i.toString())
            if (reverse == i)
                palindromes.push(i)
        }
        return palindromes
    }
}

function reverseNumber(number) {
    var splitString = number.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray
}

module.exports = functions