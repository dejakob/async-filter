const asyncFilter = require('../index')

describe('Async filter', () => {
  it('should filter a regular array', async () => {
    const original = [1,2,3,4,5,6];
    const evenFilter = number => number % 2;
    expect(await asyncFilter(original, evenFilter))
      .toEqual(original.filter(evenFilter));
  });

  it('should filter an array with some async callbacks', async () => {
    const array = [true, false, true, true, false];
    const filter = (element) => new Promise(resolve => setTimeout(() => resolve(element), 10));
    expect(await asyncFilter(array, filter)).toEqual([true, true, true]);
  });

  it('should pass indexes to the callback', async () => {
    const array = [true, false, true, true, false];
    const callbackIndexes = [];
    const filter = async (element, index) => {
      await new Promise(resolve => setTimeout(resolve, 10));
      if (element) {
        callbackIndexes.push(index);
      }
      return element;
    };
    await asyncFilter(array, filter);
    expect(callbackIndexes).toEqual([0, 2, 3]);

  })
});