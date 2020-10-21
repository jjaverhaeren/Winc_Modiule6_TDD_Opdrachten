// Utility functions


const isNotNull = (str) => {
    if (str !== null) {
        return true;
    } else {
        return false;
    }
};

const hasRightLength = (str) => {
    if (str.length < 9) {
        return true;
    } else {
        return false;
    }
};

const hasUpperCaseCharacter = (str) => {
    let boolArray = [];
    for (i = 0; i < str.length; i++) {
        let character = str[i];
        let pattern = /((?!\d).)/;
        if (character == character.toUpperCase() && pattern.test(str[i])) {
            boolArray.push(true);
        } else {
            boolArray.push(false);
        }
    }
    const isTrue = (bool) => bool === true;
    if (boolArray.some(isTrue)) {
        return true;
    } else {
        return false;
    }
};

const hasLowerCaseCharacter = (str) => {
    let boolArray = [];
    for (i = 0; i < str.length; i++) {
        let character = str[i];
        let pattern = /((?!\d).)/;
        if (character == character.toLowerCase() && pattern.test(str[i])) {
            boolArray.push(true);
        } else {
            boolArray.push(false);
        }
    }
    const isTrue = (bool) => bool === true;
    if (boolArray.some(isTrue)) {
        return true;
    } else {
        return false;
    }
};

const  hasDigit = (str) => {
    let pattern = /\d/;
 const isItDigit = pattern.test(str);
 console.log(isItDigit);
  return isItDigit;
};


const minimumConditionsReached = conditions => {
   
    trueConditions = conditions.filter(bool => bool === true);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports =  {
    isNotNull,
    hasRightLength,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
    verifyPassword
}