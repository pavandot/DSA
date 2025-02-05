// Given an integer array nums of length n, you want to create an array ans of length 2n
// where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

var getConcatenation = function (nums) {
	let ans = [];
	const n = nums?.length;
	for (i = 0; i < nums?.length; i++) {
		ans[i] = nums[i];
		ans[i + n] = nums[i];
	}
	return ans;
};

console.log(getConcatenation([1, 3, 2, 1]));
