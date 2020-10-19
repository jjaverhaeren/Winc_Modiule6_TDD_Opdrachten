const addOne = (arrayOfNumbers) => {
    let output = [];
    arrayOfNumbers.forEach(element => {
     output.push(element + 1); 
 });
 return output;
}


module.exports = addOne;