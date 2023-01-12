// var fullName = prompt("შეიყვანეთ თქვენი სახელი სრულიად");
// // document.write(fullName);
// document.getElementById("fullName").innerHTML=fullName;

var firstNum = prompt("შეიყვანეთ პირველი რიცხვი");
var secondNum = prompt("შეიყვანეთ მეორე რიცხვი");
var action = prompt("აირჩიეთ შემდეგი მოქმედებები + , - , / , *");

// document.write(Number(firstNum) + Number(secondNum));



// If-Else
if (action ==="+") { 
  document.getElementById("action").innerHTML=(Number(firstNum) + Number(secondNum));
} else if (action ==="-") { 
    document.getElementById("action").innerHTML=(Number(firstNum) - Number(secondNum));
} else if (action ==="/") {
    document.getElementById("action").innerHTML=(Number(firstNum) / Number(secondNum));
} else if (action ==="*") {
    document.getElementById("action").innerHTML=(Number(firstNum) * Number(secondNum));
}
else {
    document.getElementById("action__error").innerHTML=("არასწორი მოქმედება");
};



// Switch
switch(action) {
    case "+":
        document.getElementById("action").innerHTML=(Number(firstNum) + Number(secondNum));
        break;
    case "-":
        document.getElementById("action").innerHTML=(Number(firstNum) - Number(secondNum));
        break;
    case "/":
        document.getElementById("action").innerHTML=(Number(firstNum) / Number(secondNum));
        break;
    case "*":
        document.getElementById("action").innerHTML=(Number(firstNum) * Number(secondNum));
        break;
    default:
        document.getElementById("action__error").innerHTML=("არასწორი მოქმედება");
};