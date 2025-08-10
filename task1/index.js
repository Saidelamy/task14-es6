function swap() {
  let x = 10;
  let y = 25;

  [x, y] = [y, x];

  console.log(x, y);
}
swap();
