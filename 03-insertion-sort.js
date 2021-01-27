// Implement Insertion Sort

// Insertion Sort grows a sorted array on the left side of the input array by:
// * If it is the first element, it is already sorted. return 1;
// * Pick next element
// * Compare with all elements in the sorted sub-list
// * Shift all the elements in the sorted sub-list that is greater than the value to be sorted
// * Insert the value
// * Repeat until list is sorted


function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++){ // loop to grab the 'next' value in unsorted array
    let valueToInsert = arr[i]; // store it as the value to insert
    let placeToInsert = i; // store its current index location

    // when the prior input is GREATER than the current input that we want to insert...
    while((placeToInsert > 0) && (arr[placeToInsert - 1] > valueToInsert)){
      // copy the larger prior input value OVER the current input
      arr[placeToInsert] = arr[placeToInsert - 1];
      // decrement the pointer to the pos of the original
      // value that was copied, i.e. 'the hole or gap to fill'
      placeToInsert--;
    }
    // then fill in the 'hole' with the value to insert
    arr[placeToInsert] = valueToInsert;
  }
}

// Test Case:
const array = [2, -1, 4, 3, 7, 3];

insertionSort(array);
console.log(array);


module.exports = {
  insertionSort
};
