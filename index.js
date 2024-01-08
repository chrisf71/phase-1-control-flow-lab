function scuberGreetingForFeet(distance) {
  // Write your code here!
  let message;
  switch (true) {
    case distance <= 400:
      message = "This one is on me!"
      break;
    case distance > 400 && distance <= 2000:
      message = "That will be twenty bucks."
      break;
    case distance <= 2500:
      message = "I will gladly take your thirty bucks."
      break;
      case distance > 2500:
        message = "No can do."
        break;

  }
  return message
}

function ternaryCheckCity(city) {
  // Write your code here!
  let result = city === "NYC" ? "Ok, sounds good." : "No go."
  return result
}

function switchOnCharmFromTip(tip) {
  // Write your code here!

  let message;

  switch(tip) {
    case "generous":
      message = "Thank you so much."
      break;
      case "not as generous":
        message = "Thank you."
        break;
        default:
          message = "Bye."
  }
  return message;
}