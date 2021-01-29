// Implement Quick Sort

// The steps, when discussed on a high level, are simple:
// * choose an element called "the pivot", how that's done is up to the implementation
// * take two variables to point left and right of the list excluding pivot
// * left points to the low index
// * right points to the high
// * while value at left is less than pivot move right
// * while value at right is greater than pivot move left
// * if both step 5 and step 6 does not match swap left and right
// * if left ≥ right, the point where they met is new pivot
// * repeat, recursively calling this for smaller and smaller arrays


function quickSort(array) {
  if(array.length <= 1) return array; // base case

  const pivot = array.shift() // remove and store first array val as pivot pointer
  const left = [] // create left half subarr
  const right = [] // create right half subarr

  array.forEach(element => { // iterate over array to push each el into new subarrs
    if(element <= pivot){
      left.push(element);
    } else {
      right.push(element)
    }
  });

  let leftSorted = quickSort(left); // recurse on left subarr until subarr length hits base
  let rightSorted = quickSort(right); // recurse on right subarr until subarr length hits base

  return [...leftSorted, pivot, ...rightSorted]; // concat sorted left, pivot, and right back together
}

// Test Case:
const array2 = [9,13,6,75,10];
console.log(quickSort(array2));

module.exports = {
  quickSort
};
