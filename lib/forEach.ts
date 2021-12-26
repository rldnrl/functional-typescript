type ForEach = <T>(array: T[], fn: (...args: unknown[]) => void) => void;

const forEach: ForEach = (array, fn) => {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
};

export default forEach;
