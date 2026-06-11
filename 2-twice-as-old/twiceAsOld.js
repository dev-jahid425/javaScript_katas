/**
 * Return the number of years ago or in the future
 * when the father was/will be twice as old as his son.
 *
 * @param {number} father - Father's current age
 * @param {number} son - Son's current age
 * @returns {number}
 */
function twiceAsOld(father, son) {
  return Math.abs(father - 2 * son);
}

// Examples
console.log(twiceAsOld(36, 7)); // 22
console.log(twiceAsOld(55, 30)); // 5
console.log(twiceAsOld(42, 21)); // 0
