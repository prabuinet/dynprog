/* Write a function allConstruct(target, wordBank)` that accepts a target string
   and an array of strings */

/* The function should return a 2D array containing all of the ways
   that the `target` can be constructed by concatenating elements of
   the `wordbank` array. Each element of the 2D array should represent
   one combination that constructs the `target`. */

/* You may reuse elements of `wordBank` as many times as needed. */

function allConstruct1(target, wordBank) {
    if(target == '') return [[]];

    const result = [];
    for(let word of wordBank) {
	if(target.startsWith(word)) {
	    const suffix = target.substr(word.length);
	    const suffixWays = allConstruct1(suffix, wordBank);
	    const targetWays = suffixWays.map(way => [word, ...way]);
	    result.push(...targetWays);
	}
    }

    return result;
}


/*
console.log(allConstruct1("purple", ['purp', 'p', 'ur', 'le', 'purpl']));

console.log(allConstruct1("abcdef",
 			    ['ab', 'abc', 'cd', 'def', 'abcd', 'ef'])); // true
console.log(allConstruct1('skateboard',
 			 ['bo', 'rd', 'ate', 't', 'sk', 'boar'])) // false
console.log(allConstruct1('enterapotentpot',
 			 ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
*/
//console.log(allConstruct1('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
//			 ['e', 'ee', 'eee', 'eeee', 'eeeeee', 'eeeeeee'])); // false

function allConstruct2(target, wordBank, memo={}) {
    if(target in memo) return memo[target];
    if(target == '') return [[]];

    const result = [];
    for(let word of wordBank) {
	if(target.startsWith(word)) {
	    const suffix = target.substr(word.length);
	    const suffixWays = allConstruct2(suffix, wordBank, memo);
	    const targetWays = suffixWays.map(way => [word, ...way]);
	    result.push(...targetWays);
	}
    }

    memo[target] = result;
    return result;
}


console.log(allConstruct2("purple", ['purp', 'p', 'ur', 'le', 'purpl']));

console.log(allConstruct2("abcdef",
 			    ['ab', 'abc', 'cd', 'def', 'abcd', 'ef'])); // true
console.log(allConstruct2('skateboard',
 			 ['bo', 'rd', 'ate', 't', 'sk', 'boar'])) // false
console.log(allConstruct2('enterapotentpot',
 			 ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
console.log(allConstruct2('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
			 ['e', 'ee', 'eee', 'eeee', 'eeeeee', 'eeeeeee'])); // false


