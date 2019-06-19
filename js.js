/*const tiles = document.querySelectorAll("#tiles line");
var Menu = document.getElementsByClassName("st0");
for (let i = 0; i < tiles.length; i++) {
  var output = `Menu ${i} is ${tiles[i].getTotalLength()}`;
  console.log (output);
}
*/

var line1 = document.querySelector("svg line");
var length1 = line1.getTotalLength();
console.log(length1);
