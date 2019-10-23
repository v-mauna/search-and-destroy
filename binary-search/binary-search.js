'use strict';

// Complete this algo
const binarySearch = (arr, target) => {
	let midLength = Math.floor(arr.length / 2);
	let midPoint = arr[midLength];
	if (target === midPoint) {
		console.log("I was found!", target)
		return true;
	} else if (target < midPoint) {
		return binarySearch(arr.slice(0, midLength), target);
	} else if (target > midPoint) {
		return binarySearch(arr.slice(midLength + 1), target);
	} else {
		console.log("I was not found :(", target);
		return false;
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
