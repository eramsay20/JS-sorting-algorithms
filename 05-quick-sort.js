// Implement Quick Sort
const array2 = [9,13,6,75,10];

function quickSort(array) {
  const pivot = [array[0]]
  const left = []
  const right = []

  if(array.length === 0 || array.length === 1) return array; // base case

  for(let i = 1; i< array.length; i++ ){
      if(array[i] < pivot[0]){
          left.push(array[i]);
      } else {
          right.push(array[i]);
      }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right))
}

console.log(quickSort(array2));

module.exports = {
  quickSort
};
