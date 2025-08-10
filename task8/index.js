let checkLengthOfString = (length, ...arr) => {
  let result = arr.filter((el) => el.length > length);
  console.log(result);
};

checkLengthOfString(3, "said", "ola", "khaled");
