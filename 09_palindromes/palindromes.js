const palindromes = function (string) {
    let re = /[^A-Za-z0–9]/g;
    let lowOrigString = string.toLowerCase().replace(re, '');
    let newString = lowOrigString.split('').reverse().join('');
    
    return lowOrigString === newString;
};

// Do not edit below this line
module.exports = palindromes;
