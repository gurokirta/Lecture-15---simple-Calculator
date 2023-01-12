var fullName = prompt("შეიყვანეთ თქვენი სახელი სრულიად");

document.getElementById("fullName").innerHTML=fullName;

var firstNum = prompt("შეიყვანეთ პირველი რიცხვი");
var secondNum = prompt("შეიყვანეთ მეორე რიცხვი");
var action = prompt("აირჩიეთ შემდეგი მოქმედებები + , - , / , *");
var result = firstNum + secondNum;


// If-Else
if (action ==="+") { 
  document.getElementById("action").innerHTML=result;
} else if (action ==="-") { 
    document.getElementById("action").innerHTML=result;
} else if (action ==="/") {
    document.getElementById("action").innerHTML=result;
} else if (action ==="*") {
    document.getElementById("action").innerHTML=result;
} else if (action=NaN) {
    document.getElementById("action__error").innerHTML=("არასწორი მოქმედება");
    console.log("არასწორი მოქმედება");
}
else {
    document.getElementById("action__error").innerHTML=("არასწორი მოქმედება");
    console.log("არასწორი მოქმედება");
};



// Switch
switch(action) {
    case "+":
        document.getElementById("action").innerHTML=result;
        break;
    case "-":
        document.getElementById("action").innerHTML=result;
        break;
    case "/":
        document.getElementById("action").innerHTML=result;
        break;
    case "*":
        document.getElementById("action").innerHTML=result;
        break;
    case NaN:
        document.getElementById("action__error").innerHTML=("არასწორი მოქმედება");
        console.log("არასწორი მოქმედება");
        break;
    default:
        document.getElementById("action__error").innerHTML=("არასწორი მოქმედება");
        console.log("არასწორი მოქმედება");
};