function bestSum1(targetSum, numbers) {
    if(targetSum == 0) return [];
    if(targetSum < 0) return null;

    let best = null;
    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = bestSum1(remainder, numbers);
        if(remainderResult != null) {
            const sumResult = [...remainderResult, num];
            if(best == null || sumResult.length < best.length) {
                best = sumResult;
            }
        }
    }

    return best;
}


// console.log(bestSum1(7, [5, 3, 4, 7])) // [7]
// console.log(bestSum1(8, [2, 3, 5])) // [3, 5]
// console.log(bestSum1(8, [1, 4, 5])) // [4, 4]
// console.log(bestSum1(100, [1, 2, 5, 25])) // [25, 25, 25, 25]

function bestSum2(targetSum, numbers, memo={}) {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum == 0) return [];
    if(targetSum < 0) return null;

    let best = null;
    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = bestSum2(remainder, numbers, memo);
        if(remainderResult != null) {
            const sumResult = [...remainderResult, num];
            if(best == null || sumResult.length < best.length) {
                best = sumResult;
            }
        }
    }

    memo[targetSum] = best;
    return best;
}


//console.log(bestSum2(7, [5, 3, 4, 7])) // [7]
//console.log(bestSum2(8, [2, 3, 5])) // [3, 5]
//console.log(bestSum2(8, [1, 4, 5])) // [4, 4]
//console.log(bestSum2(100, [1, 2, 5, 25])) // [25, 25, 25, 25]




function bestSum3(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for(let i = 0; i <= targetSum; i++) {
	if(table[i] !== null) {
	    for(let num of numbers) {
		if(i + num <= targetSum) {
		    const t = [ ...table[i], num];
		    if(!table[i + num] || t.length < table[i + num].length)
			table[i + num] = t;
		}
	    }
	}
    }

    return table[targetSum];
}

console.log(bestSum3(8, [2, 3, 5])) // [3, 5]
console.log(bestSum3(100, [1, 2, 5, 25])) // [25, 25, 25, 25]


