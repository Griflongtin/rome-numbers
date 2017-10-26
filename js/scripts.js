var romeI = "I";
var romeV = "V";
var romeX = "X";
var romeL = "L";
var romeC = "C";
var romeD = "D";
var romeM = "M";

function ones(number) {
  if (number <= 0) {
    return "";
  }else if (number <= 3) {
    return romeI.repeat(number);

  }else if (number <= 4) {
    return romeI + romeV;

  }else if (number <= 5){
    return romeV;

  }else if (number <= 8){
    var num = (number - 5)
    return romeV + romeI.repeat(num);
  } else if (number = 9){
      return romeI + romeX;
  }
}

function tens(number) {
  if (number <= 0) {
    return "";
  }else if ((number >= 1) && (number <= 3)) {
    return romeX.repeat(number);

  } else if (number <= 4) {
    return romeX + romeL

  } else if (number <= 5){
    return romeL;

  } else if (number <= 8) {
    var num = (number - 5)
    return romeL + romeX.repeat(num);
  }else if (number = 9){
    return romeX + romeC;
  }
}

function hundreds(number) {
  if (number <= 0) {
    return "";
  }else if (number <= 3) {
    return romeC.repeat(number);

  }else if (number <= 4) {
    return romeC + romeD;

  }else if (number <= 5){
    return romeD;

  }else if (number <= 8){
    var num = (number - 5)
    return romeD + romeC.repeat(num);
  }else if (number = 9){
    return romeC + romeM;
  }
}

function thousand(number) {
  if ((number >= 1) && (number <= 3)) {
    return romeM.repeat(number);
  } else if (number >=4);
    alert("Enter a smaller number!");
}

function result(number){
  debugger
  if(number.length >= 4){
    return thousand(number[0]) + hundreds(number[1]) + tens(number[2]) + ones(number[1]);
  } else if(number.length >= 3){
    return hundreds(number[0]) + tens(number[1]) + ones(number[2]);
  } else if(number.length >= 2){
    return tens(number[0]) + ones(number[1]);
  }else if(number.length >= 1){
    return ones(number[0]);
  } else {
    alert("WOAH");
  }
}



$(function(){
  var numberRome = [];
  $('#form').submit(function(event){
    event.preventDefault();
    var input = $('#input').val();

    $("#output").text(result(input));
  });
});
