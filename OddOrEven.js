const main = (arr) => {
  const add = (a, e) => {
    return a + e;
  };
  arr = [0];
  const sum = arr.reduce(add, 0);

  console.log(sum);

  if (sum === 0) {
    return "even";
  }

  if (sum % 2) {
    return "odd";
  } else {
    return "even";
  }
};

console.log(main([1, 2, 3, 4]));
