/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". */

/* Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl" */

const longestCommonPrefix = (strs) => {
	if (strs?.length <= 0) return '';

	const firstLatter = strs?.[0]?.split('');

	if (strs?.length === 1) return firstLatter?.[0] || '';

	let cps = '';

	for (let i = 0; i < firstLatter?.length; i++) {
		let tempCsp = cps + firstLatter[i];

		for (let j = 0; j < strs.length; j++) {
			const str = strs[j];
			if (!str.startsWith(tempCsp)) {
				return cps;
			}
		}
		cps = tempCsp;
	}
	return cps;
};

const longestCommonPrefix1 = (strs) => {
	let prefix = strs?.[0];
	for (let i = 1; i < strs?.length; i++) {
		let j = 0;
		while (j < Math.min(prefix.length, strs[i].length)) {
			if (prefix[j] !== strs[i][j]) {
				break;
			}
			j++;
		}
		prefix = prefix.slice(0, j);
	}
	return prefix;
};

console.log(longestCommonPrefix1(['flower', 'flow', 'flght']));
