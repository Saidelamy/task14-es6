function minMax(...arr) {
  let min = `the min of array is : ${Math.min(...arr)}`;
  let max = `the max of array is : ${Math.max(...arr)}`;
  return min, max;
}
minMax(1, 15, 0, 85, 25);
