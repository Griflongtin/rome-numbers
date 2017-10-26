var romeI = "I";
var romeV = "V";
var romeX = "X";
var romeL = "L";
var romeC = "C";
var romeD = "D";
var romeM = "M";

function ones(number) {
  if (number[0] <= 3) {
    return romeI.repeat(number);
  }else if (number[0] <= 4) {
    return romeI + romeV;

  }else if (number[0] <= 5){
    return romeV;

  }else if (number[0] <= 9){
    var num = (number[0] - 5)
    return romeV + romeI.repeat(num);
  }
}

function tens(number) {

  if ((number[0] >= 1) && (number[0] <= 4)) {
    return romeX.repeat(number[0]);
  } else if (number[0] >= 5){
    return romeL;
  }
}

function hundreds(number) {
  if ((number[0] >= 1) && (number[0] <= 4)){
    return romeC.repeat(number[0])
  } else if (number[0] >= 5){
    return romeD;
  }
}

function thousand(number) {
  if ((number[0] >= 1) && (number[0] <= 4)){
    return romeM.repeat(number[0]);
  }
}

function cool(input) {
  for (var i = 0; i < input.length; i++) {
    if(input[i] === 0){
      input[0] = "-";
    }
  }
}



$(function(){
  var numberRome = [];
  $('#form').submit(function(event){
    event.preventDefault();
    var input = $('#input').val();

    $("#output").text(cool(input));
  });
});
