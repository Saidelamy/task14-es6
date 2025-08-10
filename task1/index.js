function swap() {
  let x = 10;
  let y = 25;

  [x, y] = [y, x];

  return x, y;
}
swap();
