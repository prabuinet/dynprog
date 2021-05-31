function howSum1(targetSum, numbers) {
    if(targetSum == 0) return [];
    if(targetSum < 0 ) return null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const result = howSum1(remainder, numbers);
        if(result !== null) {
            return [...result, num];
        }
    }

    return null;
}

// console.log(howSum1(7, [2, 3])) // [3, 2, 2]
// console.log(howSum1(7, [5, 3, 4, 7])) // [4, 3]
// console.log(howSum1(7, [2, 4])) // [3, 2, 2]
// console.log(howSum1(8, [2, 3, 5])) // [2, 2, 2, 2]
// console.log(howSum1(300, [7, 14])) // null

function howSum2(targetSum, numbers, memo={}) {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum == 0) return [];
    if(targetSum < 0 ) return null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const result = howSum2(remainder, numbers, memo);
        if(result !== null) {
            memo[targetSum] = [...result, num];
            return memo[targetSum];
        }
    }

    memo[targetSum] = null;
    return null;
}

// console.log(howSum2(7, [2, 3])) // [3, 2, 2]
// console.log(howSum2(7, [5, 3, 4, 7])) // [4, 3]
// console.log(howSum2(7, [2, 4])) // [3, 2, 2]
// console.log(howSum2(8, [2, 3, 5])) // [2, 2, 2, 2]
// console.log(howSum2(300, [7, 14])) // null

function howSum3(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for(let i = 0; i <= targetSum; i++) {
	if(table[i] !== null) {
	    for(let num of numbers) {
		if(i + num <= targetSum) {
		    table[i + num] = [ ...table[i], num];
		}
	    }
	}
    }

    return table[targetSum];
}

console.log(howSum3(7, [2, 3])) // [3, 2, 2]
console.log(howSum3(7, [5, 3, 4])) // [4, 3]
console.log(howSum3(7, [2, 4])) // null
console.log(howSum3(8, [2, 3, 5])) // [2, 2, 2, 2]
console.log(howSum3(300, [7, 14])) // null
