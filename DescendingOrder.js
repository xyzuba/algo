//Your task is to make a function that can take any non-negative integer as an argument
//and return it with its digits in descending order.
//Essentially, rearrange the digits to create the highest possible number.
const func = (int) => {
  int = 1234;
  const stint = int
    .toString()
    .split("")
    .sort((a, b) => {
      return b - a;
    })
    .join("");

  return console.log(stint);
};

func();
