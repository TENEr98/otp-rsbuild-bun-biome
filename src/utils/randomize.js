export const createRandomNumbers = (quantity) => {
  const randomNumberList = [];
  for (let i = 0; i < quantity; i++) {
    const random = getRandom(0, 9);
    randomNumberList.push(random);
  }
  return randomNumberList;
};

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
