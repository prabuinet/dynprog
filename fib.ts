
// recursive

function fib1(n: number) {
    if(n <= 2)
        return 1;
    
    return fib1(n - 1) + fib1(n - 2);
}

//console.log(fib1(6))
//console.log(fib1(7))
//console.log(fib1(8))



// momoization

const memo = {}
function fib2(n: number) {
    if(n in memo) 
        return memo[n]

    if(n <= 2)
        return 1;
    
    memo[n] = fib2(n - 1) + fib2(n - 2)

    return memo[n]
}


function fib3(n: number, mem = {}) {
    if(n in mem) 
        return mem[n]

    if(n <= 2)
        return 1;
    
    mem[n] = fib3(n - 1, mem) + fib3(n - 2, mem)

    return mem[n]
}
//console.log(fib3(50))


// Tabulation method

function fib4(n: number) {
    let table = Array(n + 2);
    for(let i=0; i < table.length; i++)
	table[i] = 0;
    table[1] = 1;
    for(let i = 0; i < n; i++) {
	table[i+1] += table[i];
	table[i+2] += table[i];	
    }
    return table[n];
}

console.log(fib4(6));
console.log(fib4(7));
console.log(fib4(8));
console.log(fib4(50));


