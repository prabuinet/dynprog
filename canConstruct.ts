/* Write a function canConstruct(target, wordBank)` that accepts a target string
   and an array of strings */

/* The function should return a boolean indicating whether or not the `target` can
   be constructed by concatenating elements of the `wordbank` array. */

/* You may reuse elements of `wordBank` as many times as needed. */

function canConstruct1(target, wordBank) {
    if(target == '') return true;

    for(let word of wordBank) {
	if(target.startsWith(word)) {
	    let result = canConstruct1(target.substr(word.length), wordBank);
	    if(result)
		return true;
	}
    }

    return false;
}

/*
console.log(canConstruct1("abcdef",
			 ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct1('skateboard',
			 ['bo', 'rd', 'ate', 't', 'sk', 'boar'])) // false
console.log(canConstruct1('enterapotentpot',
			 ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
console.log(canConstruct1('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
			 ['e', 'ee', 'eee', 'eeee', 'eeeeee', 'eeeeeee'])); // false
*/

function canConstruct2(target, wordBank, memo={}) {
    if(target in memo) return memo[target];
    if(target == '') return true;

    for(let word of wordBank) {
	if(target.startsWith(word)) {
	    let result = canConstruct2(target.substr(word.length), wordBank, memo);
	    if(result) {
		memo[target] = true;
		return true;
	    }
	}
    }

    memo[target] = false;
    return false;
}

/*
console.log(canConstruct2("abcdef",
			 ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct2('skateboard',
			 ['bo', 'rd', 'ate', 't', 'sk', 'boar'])) // false
console.log(canConstruct2('enterapotentpot',
			 ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
console.log(canConstruct2('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
			 ['e', 'ee', 'eee', 'eeee', 'eeeeee', 'eeeeeee'])); // false
*/

function canConstruct3(target, wordBank) {
    let dp = Array(target.length + 1).fill(false);
    dp[0] = true;
    for(let i = 0; i < target.length; i++) {
	if(dp[i]) {
	    for(let word of wordBank) {
		if(target.slice(i, i + word.length) == word) {
		    dp[i + word.length] = true;
		}
	    }
	}
    }

    //console.log(dp);
    return dp[target.length];
}


console.log(canConstruct3("abcdef",
			 ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct3('skateboard',
			 ['bo', 'rd', 'ate', 't', 'sk', 'boar'])) // false
console.log(canConstruct3('enterapotentpot',
			 ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
console.log(canConstruct3('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
			 ['e', 'ee', 'eee', 'eeee', 'eeeeee', 'eeeeeee'])); // false

