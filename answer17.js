/*

indexOf
Write a function that will find the index of all the "o"s in "Oy! I am a normal string!" regardless of case.

*/
var oyString = "Oy! I am a normal string!"

   for(var i = 0; i < oyString.length; i++) {
   if(oyString[i].indexOf('o') != -1)
  {
      console.log([i]);
  }
  else if(oyString[i].indexOf('O') != -1){
  	console.log([i]);
  } else {
  	console.log("nada")
}
}
