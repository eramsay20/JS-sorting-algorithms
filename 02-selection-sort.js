// Implement Selection Sort
// =============================
// Selection sort works by maintaining a sorted region on the left side of the input array; this sorted region will grow by one element with every "pass" of the algorithm.

// A single "pass" of selection sort will select the next smallest element of unsorted region of the array and move it to the sorted region. Because a single pass of selection sort will move an element of the unsorted region into the sorted region, this means a single pass will shrink the unsorted region by 1 element whilst increasing the sorted region by 1 element.

// Selection sort is complete when the sorted region spans the entire array and the unsorted region is empty!
// =============================

// Swap helper function to swap array values given their index positions
function swap(arr, index1, index2) {
  return [ arr[index2], arr[index1] ] = [ arr[index1], arr[index2] ];
}

function selectionSort(array) {
  // outer loop value 'i' references the pos to place the next min value
  for(let i = 0; i< array.length; i++){
    // set initial minIndex pointer pos to i (i.e. array[0])
    let minIndex = i;

    // inner loop checks unsorted subarray for next smallest value
    for(let j = i + 1; j < array.length; j++){ //
      if(array[minIndex] > array[j]){ // whenever a smaller value is found
        minIndex = j; // store its index pos as new minIndex
      }
    }
    // then swap the value referenced in the pointer with new min value
    swap(array, i, minIndex);
  }
  return array;
}

// Test Case
const array = [1,8,5,7,3];
console.log(selectionSort(array));


module.exports = {
  selectionSort,
  swap
};
