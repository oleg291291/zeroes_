module.exports = function getZerosCount(number) {
  // your implementation
  var result = (number / 5) + (number / 20) - 5;
  return Math.floor(result);
}
