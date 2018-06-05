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

function add_strings() {
  var strings = "";
  var answer = prompt("Do you want to play?");

   do {
    var string = prompt("Enter a word.");
    strings += string + " ";
    answer = prompt("Do you want to play, again?");
  } while (answer != 'no' && answer == 'yes');
  document.getElementById("concat").innerHTML = strings;
}
