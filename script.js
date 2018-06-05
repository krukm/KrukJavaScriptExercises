function add_numbers() {
  var number = prompt("Enter your number");
  var answer = do_math(number);
  document.getElementById("total").innerHTML = "Your total is: " + answer;
  console.log("Your total is: " + answer);
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
    if(answer === 'yes') {
     do {
      var string = prompt("Enter a word.");
      strings += string + " ";
      answer = prompt("Do you want to play, again?");
    } while (answer != 'no' && answer == 'yes');
    document.getElementById("concat").innerHTML = strings;
    console.log(strings);
  } else {
    document.getElementById("concat").innerHTML = "Thanks for playing!";
  }
}

function user_name() {
  var reply = prompt("Would you like to print your name?");
  var name;
  if(reply === 'yes') {
    name = prompt("Enter your name:");
  } else {
    document.getElementById("excited_name").innerHTML = "Your name could be here!";
  }

  while(reply === 'yes') {
    name += "!";
    alert("Hello. My name is " + name);
    reply = prompt("Would you like to print this again?");
  }
  document.getElementById("excited_name").innerHTML = "Hello. My name is " + name;
}
