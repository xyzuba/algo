//5 kyu
//Write an algorithm that takes an array and moves all of the zeros to the end,
//preserving the order of the other elements.

const main = (arr) => {
  arr = [false, 0, "cock", 1, 2, 0, 3, 0, 4, 5];
  //   array.push(array.splice(array.indexOf(0), 1)[0]);

  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      temp = arr.splice(i, 1);
      arr.push(temp[0]);
    }
  }

  return console.log(arr);
};

main();
