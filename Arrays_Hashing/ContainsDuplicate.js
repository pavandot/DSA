/* Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct. */

const containsDuplicate = function (nums) {
	const hashSet = new Set();
	for (let i = 0; i < nums?.length; i++) {
		if (hashSet.has(nums[i])) return true;
		hashSet.add(nums[i]);
	}
	return false;
};

console.log(containsDuplicate([3, 4, 2]));
