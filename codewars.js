
console.log('----------------------------------------------------\n\t\t\t\tCODEWARS PROBLEMS\n----------------------------------------------------')

console.log('----------------PROBLEM 1: Square UP----------------')
/*
Given an integer n greater than or equal to 0, create and return an array with the following pattern:

squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
squareUp(2) => [0, 1, 2, 1]
squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
*/

function squareUp(n)
{
    result = []
    let pass = 0;
    while (pass < n){
        temp=[];
        for( let i = 0; i < n; i++){
            (i <= pass) ? temp.push(i+1) : temp.push(0);
        }
        result = result.concat(temp.reverse())
        pass++
    }
    return result
}

console.log(squareUp(4))

console.log('------------PROBLEM 2: ORDER BY FREQUENCY------------')

// In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increasing value.

function solve(arr){
    const freq = arr.reduce((temp, e) => {
        if (!temp[e]) temp[e] = 1;
        else temp[e]++;
        return temp;
    }, {});
    return [...arr].sort((a, b) => {
        return freq[b] - freq[a] || a - b
    })
}

arr = [2,3,5,3,7,9,5,3,7]
console.log(solve(arr))

console.log('------------PROBLEM 3: ALPHABET POSITION-------------')

// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.


function alphabetPosition(text) {
    text = text.toUpperCase();
    let result = '';
    for( let i =0; i < text.length; i++){
        let position = text.charCodeAt(i);
        if (position >= 65 && position <= 90) result += `${position - 64} `;
    }
    return result.trimEnd();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))


console.log('-------------PROBLEM 4: COUNT DUPLICATES-------------')
// this one is weird. The expected output is just the number of
// characters that have case-insensitive duplicates.


// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    text = text.toLowerCase()
    charArr = text.split('')
    console.log(charArr)
    const repeated = charArr.reduce((temp, elem) => {
        if (!temp[elem]) temp[elem] = 1;
        else temp[elem]++;
        return temp;
    }, {})
    let result = 0;
    Object.entries(repeated).forEach(([k, v]) => {
        if (v > 1) result ++;
    })
    return result;
}

console.log(duplicateCount('aAadfvwerhaAddd'));