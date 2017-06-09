// Take your Password Checker and write in code that will notify the user when they have entered a non-valid user name and password.
// Tasks:
//
// For each criteria create a function that checks the string for the password or username and returns one of two objects.
//
// Either { valid: true } or { valid: false, reason: "User ID cannot contain $"} with the reason for the rule failing.

// Then create a main function that runs all functions and prints out all failures for all criteria one at a time.
// User ID and password cannot be the same
// User ID and password have to be at least six characters long
// User ID cannot contain the following characters: !#$
// Password has to contain at least one of: !#$
// Password cannot be "password"

// --Parameters--
var userId = "Amy"
var password = "jstreet$"

//These are the conditions
// password !== userId
// userId.length >= 6
// password.length >= 6
// !userId.includes("!")
// !userId.includes("#")
// !userId.includes("$")
// password.includes("!") || password.includes("#") || password.includes("$")
// password !== "password"

// --Functions-- check user ID
function checkUserId(user) {
  return user.length >= 6 && !user.includes("!") && !user.includes("#") && !user.includes("$")
}

// --Functions-- check password
function checkPassword(pw) {
  var password = pw
  return (password.includes("!") || password.includes("#") || password.includes("$")) && (password !== "password") && (password.length >= 6)
}

// --Function to compare--
function compare(id, pword) {
return id !== pword
}

// --Login--
function login(id, pw) {
  return checkUserId(id) && checkPassword(pw) && compare(id, pw)
  }

// --Checking word length--
function atLeast(string){
  if (string.length >= 6){
    // console.log(string + " length is >= 6.")
    return true;
  } else {
    // console.log(string + " length is NOT >= 6.")
    var temp = "Your" + string + "is NOT at least 6 characters"
    failReason.concat(temp);
    return false;
  }
}

// --Checking Characters--
function hasChar(string){
  if (string.includes("!") || string.includes("#") || string.includes("$")) {
    var temp2 = " Your" + string + " contains one of the following: !#$"
    failReason = failReason.concat(temp2);

    // console.log(string + " includes one of !#$")
    return true;
  } else {
    // console.log(string + " DOES NOT include one of !#$")
    var temp3 = " Your" + string + " does NOT contain one of the following: !#$"
    failReason.concat(temp3);

    return false;
  }
}


// --Checking for "Password"--
function hasPw(string){
  if (string.toLowerCase() === "password") {
    // console.log("Password can't be password")
    var temp4 = " Your" + string + " can't be the word: 'password'"
    failReason = failReason.concat(temp4);

    return true;
  } else {
    // console.log("Good job")
    return false;
  }
}


// --Main Check--
function main() {
var userIdent = prompt("Whats your user id? Include at least 6 characters and do not include a '!' '#' or '$' ")
var userPword = prompt("Whats your password? Must be at least 6 characters and contain one of the following: '!' '#' or '$' ")
var failReason = ""
// alert("Your Login is Valid " + login(userIdent, userPword))

  if (atLeast(userIdent) && !hasChar(userIdent)) {
    console.log("Your User ID is valid!")
  } else {
    console.log("Invalid User ID!")
  }

  if (atLeast(userPword) && hasChar(userPword) && !hasPw(userPword)) {
    console.log("Password is valid!")
  } else {
    console.log("Invalid password!")
  }

  console.log(temp1 + temp2 + temp3 + temp4)
}
