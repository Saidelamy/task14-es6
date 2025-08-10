function lowerCaseOrNote(...arr) {
  let result = arr.map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  });
  console.log(result);
}

lowerCaseOrNote("said", "mohamed", "sara", "mona");
