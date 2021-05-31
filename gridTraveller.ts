/*

    Problem:

    Say that you are a traveller on a 2D grid. 
    
    You begin in the top left corner and your goal is to travel to the bottom-right corner.

    You may only move down or right.

    In how many ways can you travel to the goal on a grid with dimension m * n?


*/

function gridTraveller1(m, n) {
    if(m <= 1 || n <= 1)
        return 1
    return gridTraveller1(m - 1, n) + gridTraveller1(m, n - 1)
}

// console.log(gridTraveller1(1, 1))
// console.log(gridTraveller1(2, 3))
// console.log(gridTraveller1(3, 2))
// console.log(gridTraveller1(3, 3))




// memoized

function gridTraveller2(m, n, memo={}) {
    const key = m + ',' + n

    if(key in memo)
        return memo[key]

    if(m <= 1 || n <= 1)
        return 1
    
    memo[key] = gridTraveller2(m - 1, n, memo) + gridTraveller2(m, n - 1, memo)
    return memo[key]
}

// console.log(gridTraveller2(1, 1))
// console.log(gridTraveller2(2, 3))
// console.log(gridTraveller2(3, 2))
// console.log(gridTraveller2(3, 3))
// console.log(gridTraveller2(18, 18))

function gridTraveller3(m, n) {
    const table = Array(m + 1).fill(0).map(x => Array(n + 1).fill(0));

    table[1][1] = 1;
    
    for(let i = 0; i <= m; i++) {
	for(let j = 0; j <= n; j++) {
	    const current = table[i][j];
	    if(j + 1 <= n)
		table[i][j + 1] += current;
	    if(i + 1 <= m)
		table[i + 1][j] += current;
	}
    }
	    
    return table[m][n];
}

console.log(gridTraveller3(1, 1))
console.log(gridTraveller3(2, 3))
console.log(gridTraveller3(3, 2))
console.log(gridTraveller3(3, 3))
console.log(gridTraveller3(18, 18))


