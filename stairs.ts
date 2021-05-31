
function ways(n) {
    if(n == 0)
	return 1;
    if(n < 0)
	return 0;

    return ways(n - 1) + ways(n - 2);
}


console.log(ways(0)); // 1
console.log(ways(2)); // 2
console.log(ways(3)); // 3
console.log(ways(4)); // 5
console.log(ways(10));
