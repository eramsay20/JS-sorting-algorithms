// Bubble Sort Overview
// NOTE: Press Option + 'Z' on mac to condense notes to fit your editor
// ------------------------------------ //
// Bubble sort works by performing multiple passes to move elements closer to their final positions. A single pass will iterate through the entire array once.

// A pass works by scanning the array from left to right, two elements at a time, and checking if they are ordered correctly. To be ordered correctly the first element must be less than or equal to the second. If the two elements are not ordered properly, then we swap them to correct their order.
// ------------------------------------ //


// Swap helper function used to swap array values in place
const swap = (array, idx1, idx2) => {
  // swap array values by a given index using array destructuring
  return [array[idx2], array[idx1]] = [ array[idx1], array[idx2] ]
}

// Bubble Sort
const bubbleSort = array => {
  let swapped = false; // boolean indicating whether a pair of elements were swapped while iterating

  // loop through entire array, comparing elem pairs from left to right
  for(let i = 0; i< array.length; i++){
    if(array[i] > array[i+1]){  // if 1st val greater than 2nd...
      swap(array, i, i+1);      // ... swap values so lower is closer to array start
      swapped = true;           // ... then flip 'swapped' condition to true
    }
  }
  // base: return early if no swap calls were necessary (i.e. values are sorted)
  if(swapped === false) return array;

  // step: recursively call the function again until sorted
  // (i.e. recurse until swapped variable remains false after iterating through the array)
  return bubbleSort(array);
}

// Test Array
let arr1 = [8, 1, 3, 7, 5];

// Check Test Case
console.log(bubbleSort(arr1));


module.exports = {
  bubbleSort,
  swap
};
