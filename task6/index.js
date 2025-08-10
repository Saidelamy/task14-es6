function lowerCaseOrNote(...arr) {
  return arr.map((element) => {
    element.charAt(0).toUpperCase() + element.slice(1);
  });
}

lowerCaseOrNote("said", "mohamed", "sara", "mona");
