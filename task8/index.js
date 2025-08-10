let checkLengthOfString = (length, ...arr) => {
  return arr.filter((el) => el.length > length);
};

checkLengthOfString(3, "said", "ola", "khaled");
