type Every = <T>(array: T[], fn: (element: T) => boolean) => void;

const every: Every = (array, fn) => {
  let result = true;
  for (const value of array) {
    result = result && fn(value);
  }

  return result;
};
