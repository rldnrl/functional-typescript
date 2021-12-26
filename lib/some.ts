type Some = <T>(array: T[], fn: (element: T) => boolean) => boolean;

const some: Some = (array, fn) => {
  let result = false;

  for (const value of array) {
    result = result || fn(value);
  }

  return result;
};
