let input = document.querySelector(".input");

let zero = document.getElementById("zero");
let divide = document.getElementById("divide");
let equal = document.getElementById("equal");
let dot = document.getElementById("dot");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let plus = document.getElementById("plus");

let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let minus = document.getElementById("minus");

let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let multiply = document.getElementById("multiply");

let reciprocal = document.getElementById("reciprocal");
let negate = document.getElementById("negate");
let percent = document.getElementById("percent");
let allBlank = document.getElementById("c");

// let underroot = document.getElementById("underoot");
let wholeBracket = document.getElementById("whole_bracket");
let closeBracket = document.getElementById("close_bracket");
let openBracket = document.getElementById("open_bracket");
let cut = document.getElementById("cut");

let inputVal = "";

//all event listener start here
window.addEventListener("load", function (e) {
  input.value = 0;
});

zero.addEventListener("click", function (e) {
  inputVal += zero.textContent;
  input.value = inputVal;
});

divide.addEventListener("click", function (e) {
  inputVal += divide.textContent;
  input.value = inputVal;
});

equal.addEventListener("click", function (e) {
  if (input.value === "0") {
    alert("please provide some value");
    inputVal = "0";
    input.value = inputVal;
  }
  try {
    input.value = eval(inputVal);
    inputVal = "";
  } catch (err) {
    alert(err);
  }
});

dot.addEventListener("click", function (e) {
  inputVal += dot.textContent;
  input.value = inputVal;
});

one.addEventListener("click", function (e) {
  inputVal += one.textContent;
  input.value = inputVal;
});

two.addEventListener("click", function (e) {
  inputVal += two.textContent;
  input.value = inputVal;
});

three.addEventListener("click", function (e) {
  inputVal += three.textContent;
  input.value = inputVal;
});

plus.addEventListener("click", function (e) {
  inputVal += plus.textContent;
  input.value = inputVal;
});

four.addEventListener("click", function (e) {
  inputVal += four.textContent;
  input.value = inputVal;
});

five.addEventListener("click", function (e) {
  inputVal += five.textContent;
  input.value = inputVal;
});

six.addEventListener("click", function (e) {
  inputVal += six.textContent;
  input.value = inputVal;
});

minus.addEventListener("click", function (e) {
  inputVal += minus.textContent;
  input.value = inputVal;
});

seven.addEventListener("click", function (e) {
  inputVal += seven.textContent;
  input.value = inputVal;
});

eight.addEventListener("click", function (e) {
  inputVal += eight.textContent;
  input.value = inputVal;
});

nine.addEventListener("click", function (e) {
  inputVal += nine.textContent;
  input.value = inputVal;
});

multiply.addEventListener("click", function (e) {
  inputVal += multiply.textContent;
  input.value = inputVal;
});

reciprocal.addEventListener("click", function (e) {
  if (input.value === "0") {
    alert("please provide some value");
    inputVal = "0";
    input.value = inputVal;
  }
  try {
    input.value = 1 / eval(inputVal);
  } catch (err) {
    alert(err);
  }
});

negate.addEventListener("click", function (e) {
  if (input.value === "0") {
    alert("please provide some value");
    inputVal = "0";
    input.value = inputVal;
  }
  try {
    input.value = -eval(inputVal);
  } catch (err) {
    alert(err);
  }
});

percent.addEventListener("click", function (e) {
  let percentNum = eval(inputVal) / 100;
  percentNum = percentNum + "*";
  inputVal = "";
  inputVal += percentNum;
  input.value = percentNum;
});

allBlank.addEventListener("click", function (e) {
  // inputVal += allBlank.textContent;
  inputVal = "";
  input.value = 0;
});

// underroot.addEventListener("click", function (e) {
//   inputVal += underroot.textContent;
//   input.value = inputVal;

//   const boolean = inputVal.includes(
//     `${document.getElementById("underoot").textContent}`
//   );
//   let index = inputVal.indexOf(
//     `${document.getElementById("underoot").textContent}`
//   );
//   index = index + 1;
//   console.log(boolean);
//   console.log(index);
// });

wholeBracket.addEventListener("click", function (e) {
  // inputVal += wholeBracket.textContent;
  inputVal = "(" + inputVal + ")";
  input.value = inputVal;
});

closeBracket.addEventListener("click", function (e) {
  inputVal += closeBracket.textContent;
  input.value = inputVal;
});

openBracket.addEventListener("click", function (e) {
  inputVal += openBracket.textContent;
  input.value = inputVal;
});

cut.addEventListener("click", function (e) {
  inputVal = inputVal.slice(0, inputVal.length - 1);
  input.value = inputVal;
});
