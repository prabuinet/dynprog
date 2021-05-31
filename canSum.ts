/*

Write a function canSum1(targetSum, numbers) that takes in a targetSum and 
and array of numbers as arguments.

The function should return a boolean indicating whether or not it
is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed.

You may assume that all input numbers are non-negative.

*/

function canSum1(targetSum, numbers) {
    if(targetSum === 0) return true
    if(targetSum < 0) return false

    for(let num of numbers) {
        const remainder = targetSum - num;
        if(canSum1(remainder, numbers) === true) {
            return true
        }
    }

    return false
}

//console.log(canSum1(7, [2, 3]));       // True
//console.log(canSum1(7, [5, 3, 4, 7])); // True
//console.log(canSum1(7, [2, 4]));       // False
//console.log(canSum1(8, [2, 3, 5]));    // True
//console.log(canSum1(300, [7, 14]));


function canSum2(targetSum, numbers, memo={}) {
    if(targetSum in memo) return memo[targetSum];

    if(targetSum === 0) return true
    if(targetSum < 0) return false

    for(let num of numbers) {
        const remainder = targetSum - num;
        if(canSum2(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true
        }
    }

    memo[targetSum] = false
    return false
}

// console.log(canSum2(7, [2, 3]));
// console.log(canSum2(7, [5, 3, 4, 7]));
// console.log(canSum2(7, [2, 4]));
// console.log(canSum2(8, [2, 3, 5]));
// console.log(canSum2(300, [7, 14]));


function canSum3(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    for(let i = 0; i <= targetSum; i++) {
	if(table[i] == true) {
	    for(let num of numbers) {
		if(i + num >= table.length)
		    break;
		table[i + num] = true;
	    }
	}
    }

    console.log(tablexb)
    return table[targetSum];
}

//console.log(canSum3(7, [2, 3]));
console.log(canSum3(7, [5, 3, 4, 7]));
//console.log(canSum3(7, [2, 4]));
//console.log(canSum3(8, [2, 3, 5]));
//console.log(canSum3(300, [7, 14]));

8610990755
