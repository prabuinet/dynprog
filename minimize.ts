// https://www.youtube.com/watch?v=f2xi3c1S95M&ab_channel=KeepOnCoding


function minimizeRec(n) {
    if(n <= 1)
	return 0;

    let lst = [];

    if(n % 2 == 0)
        lst.push(minimizeRec(n / 2) + 1)
    if(n % 3 == 0)
        lst.push(minimizeRec(n / 3) + 1)
    lst.push(minimizeRec(n - 1) + 1)

    //console.log(lst);
    return Math.min(...lst);
}


//console.log(minimizeRec(100))
//console.log(minimizeRec(1000))

function minimizeMem(n, mem={}) {
    if(n <= 1)
	return 0;

    if(n in mem)
        return mem[n];

    let lst = [];

    if(n % 2 == 0)
        lst.push(minimizeMem(n / 2, mem) + 1)
    if(n % 3 == 0)
        lst.push(minimizeMem(n / 3, mem) + 1)
    lst.push(minimizeMem(n - 1, mem) + 1)

    //console.log(lst);
    const min = Math.min(...lst);
    mem[n] = min;
    return min;
}

//console.log(minimizeMem(100));
//console.log(minimizeMem(1000));

function minimize(n) {
    let dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;
    dp[1] = 0;

    for(let i = 1; i < n; i++) {
        if(i + 1 <= n)
            dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
        if(i * 2 <= n)
            dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
        if(i * 3 <= n)
            dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
    }

    return (dp[n]);
}

console.log(minimize(1000));
