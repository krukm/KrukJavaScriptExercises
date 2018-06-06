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
  var answer = prompt("Do you want to play?", "yes");
    if(answer === 'yes') {
     do {
      var string = prompt("Enter a word.");
      strings += string + " ";
      answer = prompt("Do you want to play, again?", "yes");
    } while (answer != 'no' && answer == 'yes');
    document.getElementById("concat").innerHTML = strings;
    console.log(strings);
  } else {
    document.getElementById("concat").innerHTML = "Thanks for playing!";
  }
}

function user_name() {
  var reply = prompt("Would you like to print your name?", "yes");
  var name;
  if(reply === 'yes') {
    name = prompt("Enter your name:");
  } else {
    document.getElementById("excited_name").innerHTML = "Your name could be here!";
  }

  while(reply === 'yes') {
    name += "!";
    alert("Hello. My name is " + name);
    reply = prompt("Would you like to print this again?", "yes");
  }
  document.getElementById("excited_name").innerHTML = "Hello. My name is " + name;
}

function meal_time() {
  var time_of_day = prompt("What time of day is it? morning, noon, or evening");

  switch(time_of_day) {
    case "morning":
      document.getElementById("time_of_day").innerHTML = "Since it is morning, you should be eating breakfast. We suggest eggs and toast.";
      break;
    case "noon":
      document.getElementById("time_of_day").innerHTML = "Since it is noon, you should be eating lunch. We suggest a salad.";
      break;
    case "evening":
      document.getElementById("time_of_day").innerHTML = "Since it is evening, you should be eating dinner. We suggest chicken and rice.";
      break;
    default:
      alert("Please enter a valid time of day: morning, noon, or evening.");
      time_of_day = prompt("What time of day is it? morning, noon, or evening");
  }
}
