var romeI = "I";
var romeV = "V";
var romeX = "X";
var romeL = "L";
var romeC = "C";
var romeD = "D";
var romeM = "M";

function runInput(number){
  if (number.length = 4){
    var one = number[3];
    var ten = number[2];
    var h = number[1];
    var th = number[0]

  } else if (number.length = 3) {
    var one = number[2];
    var ten = number[1];
    var h = number[0];
  } else if (number.length = 2) {
    var one = number[1];
    var ten = number[0];
  } else {
    var one = number;
  }
};

function ones(number) {
  if (number[0] <= 3) {
    return romeI.repeat(number[0]);
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
  if (number[0] <= 3) {
    return romeI.repeat(number[0]);
  }else if (number[0] <= 4) {
    return romeI + romeV;

  }else if (number[0] <= 5){
    return romeV;

  }else if (number[0] <= 9){
    var num = (number[0] - 5)
    return romeV + romeI.repeat(num);
  }
}

$(function(){
  var numberRome = [];
  $('#form').submit(function(event){
    event.preventDefault();
    var input = $('#input').val();

    $("#output").text(ones(input));
  });
});
