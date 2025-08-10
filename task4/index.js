function positiveNumbers(...arr) {
  let result = arr.filter((element) => element > 0);
  console.log(result);
}

positiveNumbers(-1, -5, 0, 45, 19, 565);
