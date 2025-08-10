let body = document.body;
let arr = ["apple", "orange", "panana", "mango"];

function checkOnArray() {
  // a
  let typeFilter = arr.every((item) => typeof item === "string");
  console.log(typeFilter);
  //   b
  let some = arr.some((el) => el.startsWith("a"));
  //   c
  let Filter = arr.filter(
    (item) => item.startsWith("m") || item.startsWith("a")
  );
  //   d
  let map = arr.map((item) => {
    return ` i love ${item}`;
  });
  //   e
  map.forEach((elemnt) => {
    body.innerHTML += `<h1>${elemnt}</h1>`;
  });
}

checkOnArray();
