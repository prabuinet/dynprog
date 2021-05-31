function sumOfN(n) {
    if(n == 1)
        return 1;
    let a = sumOfN(n - 1);
    let answer = n + a;
    return answer;
}

console.log(sumOfN(5))

