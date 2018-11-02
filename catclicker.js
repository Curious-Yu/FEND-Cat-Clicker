var click1 = 0;
var click2 = 0;

// event listener for cat #1 //
document.getElementById("clickCat1").addEventListener("click", counterFunction1, true);

// function for the click counter //
function counterFunction1() {
  click1++;
  document.getElementById("clickCounter1").innerHTML = "Cat Clicking Counter: " + click1;
};

// event listener for cat #2 //
document.getElementById("clickCat2").addEventListener("click", counterFunction2, true);

// function for the click counter //
function counterFunction2() {
  click2++;
  document.getElementById("clickCounter2").innerHTML = "Cat Clicking Counter: " + click2;
};
