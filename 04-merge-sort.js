// Implement Merge Sort

// The algorithm for merge sort is actually really simple.
// * if there is only one element in the list, it is already sorted. return that array.
// * otherwise, divide the list recursively into two halves until it can no more be divided.
// * merge the smaller sorted lists into a new larger sorted list as you come back down the recursive call stack.

// Helper Merge() function that combines two sorted arrays into one
const merge = (array1, array2, res = []) => {
  // base: return concatenated arrays when one becomes empty
  if (array1.length === 0 || array2.length === 0) return res.concat(array1).concat(array2);

  if (array1[0] < array2[0]){ // if value of 1st array >> that of the 2nd
    res.push(array1.shift()); // shift() the value off and add to return array, res
  } else {
    res.push(array2.shift()); // else, do the same to the 2nd array instead
  }

  return merge(array1, array2, res); // recursively call merge until base cond met
}

// Primary MergeSort() function
const mergeSort = array => {
  // base case: an array of only 1 (or fewer) value is already sorted, thus return
  if(array.length === 0 || array.length === 1) return array;

  const mid = Math.floor(array.length / 2); // identify array midpoint
  const left = array.slice(0, mid); // create new subarr for left half
  const right = array.slice(mid); // create new subarr for right half

  const leftSort = mergeSort(left); // make recursive call on left half
  const rightSort = mergeSort(right); // make recursive call on right half

  // call helper function on returned sorted left & right subarrs to rejoin them in sorted order
  return merge(leftSort, rightSort);
}

// Test Case:
const arr2 = [1, 3, 5, 7, 8, 3, 6, 7, 8];
console.log(mergeSort(arr2)) // [ 1, 3, 3, 5, 6, 7, 7, 8, 8 ]

module.exports = {
  merge,
  mergeSort
};
