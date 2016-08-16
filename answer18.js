
1. Write a function which accepts a number as input and inserts dashes (-) between every two numbers. For example if you accept 025468 the output should be 02-54-68

function everyTwo(number) {
  var numString = '';
  var newNum = number.toString().split('');
  console.log(newNum);
    for(var i = 0; i < newNum.length; i++){
      if(newNum[i]%2 === 0){
        numString += newNum[i] + '-';
      }
    }

}
console.log(025468);


function dashes(number){
    var numString = '';
    var numArr = number.toString().split('');
    console.log(numArr);
    for(i = 0; i < numArr.length; i++){
        if(.indexOf.numArr[i] % 2 === 0){
            numString += numArr[i] + '-';
        }else{
            numString += numArr[i];
        }
    }
    console.log(numString);
}


dashes(025468);




function DashInsert(num) {
  var numArr = num.toString().split('');

    for (var i = 0; i < numArr.length; i++){
    if (numArr[i]%2 != 0){
      if (numArr[i+1]%2 != 0) {
          numArr.splice(i, 0, "-");
          }
        }
  }
  return numArr;
}





//LATEST VERSION

function everyTwo(number) {
  var numString = '';
  var newNum = number.toString().split('');
  console.log(newNum);
  var newnewNum = newNum.indexOf();
    for(var i = 0; i < newNum.length; i++){
      if(newnewNum%2 === 0){
        numString += newnewNum[i] + '-';
      }
    }

}
console.log(everyTwo(025468));






////// found from the web. this one puts a dash after determining if the number string is odd.

Edit: OrangeDog's answer was posted earlier (by nearly a full half hour), I just wanted to make an answer which uses your code since you're almost there. Using another array instead of splicing into one you were looping through (this happens to return a string using join):

var num = 4567897;


function DashInsert(num) {
    var numArr = num.toString().split('');

    var len = numArr.length;
    var final = [];
    for (var i = 0; i < len; i++){
        final.push(numArr[i]);
        if (numArr[i]%2 != 0){
            if (i+1 < len && numArr[i+1]%2 != 0) {
                final.push("-")
            }
        }
    }
  return final.join("");
}

alert(DashInsert(num));
