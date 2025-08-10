function positiveNumbers(...arr) {
  return arr.filter((element) => element > 0);
}

positiveNumbers(-1, -5, 0, 45, 19, 565);
