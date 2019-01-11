/**
 * Set a value to an object property with a path
 * 
 * @param {object} object The Object to update
 * @param {String} path The properties path
 * @param {*} value The value to assign
 */
const setPath = (object, path, value) => path
   .split('.')
   .reduce((o,p) => o[p] = path.split('.').pop() === p ? value : o[p] || {}, object);

/**
 * Resolve an object
 * 
 * @param {object} input The Object to resolve
 */
const resolveObjects = input => {
  const output = {};

  Object.keys(input).forEach(key => {
    if (key.indexOf('.') !== -1) {
      // if the property is a path, convert it to properties
      setPath(output, key, input[key]);
    } else {
      output[key] = input[key];
    }
  });

  return output;
};

module.exports = resolveObjects;