const getWordLengths = (arrayOfStrings) => {
    let output = [];
    arrayOfStrings.forEach(string => {
        output.push(string.length);
    })
    return output;
};

module.exports = getWordLengths;