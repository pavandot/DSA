/* Given two strings s and t, return true if t is an anagram of s, and false otherwise. */

const s = 'cat';
const t = 'car';

// Sort Method
const isAnagram = function (s, t) {
	if (s?.length !== t?.length) return false;
	const sSort = s?.split('')?.sort()?.join('');
	const tSort = t?.split('')?.sort()?.join('');
	return sSort == tSort;
};

// Set Method
const isAnagramWithSets = function (s, t) {
	if (s?.length !== t?.length) return false;
	const s_set = new Set(s?.split('')?.sort());
	const t_set = new Set(t?.split('')?.sort());
	if (s_set.size !== t_set.size) return false;
	return s_set.difference(t_set).size === 0;
};

// Hash method
const isAnagramByHashTable = (s, t) => {
	if (s?.length !== t?.length) return false;
	const s_hash = {};
	const t_hash = {};
	for (let i = 0; i < s?.length; i++) {
		s_hash[s[i]] = (s_hash[s[i]] || 0) + 1;
		t_hash[t[i]] = (t_hash[t[i]] || 0) + 1;
	}
	for (const key in s_hash) {
		if (s_hash[key] !== t_hash[key]) return false;
	}
	return true;
};

console.log(isAnagramByHashTable(s, t));
