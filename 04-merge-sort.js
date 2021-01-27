// Implement Merge Sort

const array1 = [1,3,5,7,8];
const array2 = [3,6,8,9,10];

function merge(array1, array2, res = []) {
  const value1 = array1[0];
  const value2 = array2[0];
  if (array1.length === 0 || array2.length === 0) return res.concat(array1).concat(array2)
  if (value1 < value2){
    res.push(array1.shift());
  } else {
    res.push(array2.shift());
  }
  return merge(array1, array2, res);
}

// console.log(merge(array1, array2));
function mergeSort(array) {
  if(array.length === 0 || array.length === 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  const leftSort = mergeSort(left);
  const rightSort = mergeSort(right);

  return merge(leftSort, rightSort);
}
const arr2 = [1, 3, 5, 7, 8, 3, 6, 7, 8];
console.log(mergeSort(arr2))

module.exports = {
  merge,
  mergeSort
};
