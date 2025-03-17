const getRandomInt = () => {
  let result;
  do {
    result = Math.floor(Math.random() * 10);
  } while (result === 0);
  return result;
};
