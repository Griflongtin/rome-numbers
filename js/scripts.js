var number

// function thousands(number) {
//   debugger
//   if () {
//
//     }
//   } else if (number[3] === 4) {
//
//   } else {
//
//   }
// }
//
// function hundreds(number) {
//
// }
//
// function tens(number) {
//
// }


//CURRENTLY IF # IS 1 DIGIT//
function ones(number) {
  var numberRome = "I";

  if (number[0] <= 3) {
    number[0]
    return numberRome.repeat(number[0]);
  }else if (number[0] <= 4) {
  }else {
    console.log("no");
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
