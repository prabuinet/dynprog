/* Write a function countConstruct(target, wordBank)` that accepts a target string
   and an array of strings */

/* The function should return the number of ways that the `target` can
   be constructed by concatenating elements of the `wordbank` array. */

/* You may reuse elements of `wordBank` as many times as needed. */

function countConstruct1(target, wordBank) {
    if(target == '') return 1;

    let count = 0;
    for(let word of wordBank) {
	if(target.startsWith(word)) {
	    let result = countConstruct1(target.substr(word.length), wordBank);
	    count += result;
	}
    }

    return count;
}

/*
console.log(countConstruct1("abcdef",
			    ['ab', 'abc', 'cd', 'def', 'abcd', 'ef'])); // true
console.log(countConstruct1('skateboard',
			 ['bo', 'rd', 'ate', 't', 'sk', 'boar'])) // false
console.log(countConstruct1('enterapotentpot',
			 ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
console.log(countConstruct1('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
			 ['e', 'ee', 'eee', 'eeee', 'eeeeee', 'eeeeeee'])); // false
*/

function countConstruct2(target, wordBank, memo={}) {
    if(target in memo) return memo[target];
    if(target == '') return 1;

    let count = 0;
    for(let word of wordBank) {
	if(target.startsWith(word)) {
	    let result = countConstruct2(target.substr(word.length), wordBank, memo);
	    count += result;
	}
    }

    memo[target] = count;
    return count;
}


function countConstruct3(target, wordBank) {
    let dp = Array(target.length + 1).fill(0);
    dp[0] = 1;

    for(let i = 0; i < target.length; i++) {
	if(dp[i]) {
	    for(let w of wordBank) {
		if(target.slice(i, i + w.length) === w) {
		    dp[i + w.length] = dp[i + w.length] + dp[i];
		}
	    }
	}
    }

    return dp[target.length];
}

console.log(countConstruct3("abcdef",
			    ['ab', 'abc', 'cd', 'def', 'abcd', 'ef'])); // true
console.log(countConstruct3('skateboard',
			 ['bo', 'rd', 'ate', 't', 'sk', 'boar'])) // false
console.log(countConstruct3('enterapotentpot',
			 ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
console.log(countConstruct3('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
			 ['e', 'ee', 'eee', 'eeee', 'eeeeee', 'eeeeeee'])); // false




