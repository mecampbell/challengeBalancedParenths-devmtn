// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

const balanced = (str) => {
    let openPar = 0;
    let closedPar = 0;
    for (let i =0; i < str.length; i++) {
        if (str[i] === '(') {
            openPar += 1;
        } else if (str[i] === ')') {
            closedPar += 1;
        }
    };
    return openPar === closedPar;
};

console.log(balanced(sample1));
console.log(balanced(sample2));
console.log(balanced(sample3));
console.log(balanced(sample4));