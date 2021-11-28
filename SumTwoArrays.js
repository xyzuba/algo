const main = (arr1, arr2) => {
  arr1 = [-7, 2, 3];
  arr2 = [-75, 4, 5];

  let arrayToNumber1 = parseInt(arr1.join(""));
  let arrayToNumber2 = parseInt(arr2.join(""));
  const sum = (arrayToNumber1 + arrayToNumber2)
    .toString()
    .match(/-?\d/g)
    .map(Number);
  // .join("");

  return console.log(sum);
};

main();
