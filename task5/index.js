function positiveNumbers(...arr) {
  return arr.reduce((acc, element) => (acc = acc + element));
}

positiveNumbers(45, 19, 565);
