function createCounter(init) {
  const initialValue = init;
  return {
    increment: () => {
      init++;
      return init;
    },
    decrement: () => {
      init--;
      return init;
    },
    reset: () => {
      init = initialValue;
      return init;
    }
  }
}