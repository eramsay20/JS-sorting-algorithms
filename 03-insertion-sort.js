// Implement Insertion Sort
const array = [2, -1, 4, 3, 7, 3];

function swap(arr, index1, index2) {
  return [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function insertionSort(list) {

   for(let i = 1; i< list.length; i++){ // incrementing your new insert value //
    for(let j = i - 1; j>= 0; j--){ // decrementing subarr while comparing values

      if(list[i] <= list[j] && (list[i] > list[j-1] || list[j-1] === undefined)){
          let [ newInsert ]  = list.splice(i, 1); // removes insertValue from right side
          list.splice(j, 0, newInsert) // inserts new value into sorted array
          break;
      }
    }
  }
}

insertionSort(array);
console.log(array);

module.exports = {
  insertionSort
};

// Insertion Sort grows a sorted array on the left side of the input array by:
// * If it is the first element, it is already sorted. return 1;
// * Pick next element
// * Compare with all elements in the sorted sub-list
// * Shift all the elements in the sorted sub-list that is greater than the value to be sorted
// * Insert the value
// * Repeat until list is sorted
