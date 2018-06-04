function add_numbers() {
  var number = prompt("Enter your number");
  var answer = do_math(number);
  document.getElementById("total").innerHTML = "Your total is: " + answer;
}

function do_math(num) {
  var total = 0;
  for(var i = 0; i <= num; i++) {
    total += i;
  }
  return total;
}
