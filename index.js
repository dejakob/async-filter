/**
 * Array.prototype.filter, but with async callbacks
 * @param {Array.<any>} array [Original array to run the filter on]
 * @param {Function} asyncCallbackMethod [Async callback to run with element, index? and originalArray? as arguments]
 * @param {Object} [thisArgument] [Optional this-context to call the asyncCallbackMethod with]
 * @returns {Array.<any>}
 */
async function asyncFilter(array, asyncCallbackMethod, thisArgument) {
  const filteredArray = [];

  for (const [ index, element ] of array.entries()) {
    let test;

    if (thisArgument) {
      test = await asyncCallbackMethod.call(thisArgument, element, index, array);
    }
    else {
      test = await asyncCallbackMethod(element, index, array);
    }

    if (test) {
      filteredArray.push(element);
    }
  }

  return filteredArray;
}

module.exports = asyncFilter;