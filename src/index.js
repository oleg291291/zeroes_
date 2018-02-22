module.exports = function getZerosCount(number) {
  // your implementation


  // var numStr = number + "";
  // var numberZeroes = 0
  // for (var i = (numStr.length - 1); numStr[i] == 0 ; i--){
    

  var result = Math.floor(number / 5) + Math.floor(number / 25) + Math.floor(number/ 125) + Math.floor(number/ 625) + Math.floor(number / 3125) + Math.floor(number / 15625) + Math.floor(number/ 78125) + Math.floor(number/ 390625) + Math.floor(number/ 1953125) + Math.floor(number/ 9765625) + Math.floor(number/ 48828125) + Math.floor(number/ 244140625) ;
  return Math.floor(result);
}
