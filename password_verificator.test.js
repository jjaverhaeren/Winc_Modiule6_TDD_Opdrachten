
const { isNotNull, 
        hasRightLength, 
        hasUpperCaseCharacter,
        hasLowerCaseCharacter,
        hasDigit,
        minimumConditionsReached,
        verifyPassword
        } = require('./password_verificator');

  

// // password is niet null
// test('String is not null', () => {
//     expect(isNotNull('string')).toBeTruthy();
// });

// // password is korter dan 9 karakters
// test('String has less than 9 characters', () => {
//     expect(hasRightLength('string')).toBeTruthy();
// });

// // password heeft 1 of meer uppercase karakters
// test('String has 1 or more uppercase characters', () => {
//     expect(hasUpperCaseCharacter('12')).toBeTruthy();
// });


// // password heeft 1 of meer lowercase karakters
// test('String has 1 or more lowercase characters', () => {
//     expect(hasLowerCaseCharacter('34')).toBeTruthy();
// });

// // password heeft 1 of meer cijfers
// test('String has 1 or more number characters', () => {
//     expect(hasDigit('STNr9')).toBeTruthy();
// });

// // Een wachtwoord wordt alléén goedgekeurd als:
// // tenminste 3 van de bovenstaande condities true zijn
// test('at least 3 of the above functions must return true', () => {
//     const password = '1234'
//     const conditions = [
//         isNotNull(password),
//         hasRightLength(password),
//         hasUpperCaseCharacter(password),
//         hasLowerCaseCharacter(password),
//         hasDigit(password)
//     ];
//     expect(minimumConditionsReached(conditions)).toBeTruthy();
// });


// conditie 4 true is (die moet dus altijd true zijn)
test('password meets all requirements', () => {
    const password = '1234';
    expect(verifyPassword(password)).toBeTruthy();
});

// henkie1
// 1234a
// z
// henkie1234
// HENKhenk
// HENK33$
// 1234
//  ``