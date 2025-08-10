function positiveNumbers(...arr) {
  let result = arr.reduce((acc, element) => (acc = acc + element));
  console.log(result);
}

positiveNumbers(45, 19, 565);
