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



function ones(number) {
  console.log(number[0]);

  if (number[0] <= 3) {
    console.log("yes");
  }else if (number[0] <= 4) {
    console.log("maybe");
    console.log(number);
  }else {
    console.log("no");
  }
}

$(function(){
  $('#form').submit(function(event){
    event.preventDefault();
    var input = $('#input').val();

    $("#output").text(ones(input));
  });
});
