var evens = [0, 2, 4, 6, 8, 10];

evens.forEach(even => {
  console.log(`${even} is not odd!`);
});
even => {
  console.log(`${even} is not odd!`);
}
var evens = [0, 2, 4, 6, 8, 10];

evens.forEach((even, index, array) => {
  debugger;
  console.log(`${even} is not odd!`);
});



// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here:
