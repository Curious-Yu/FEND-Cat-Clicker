var click = 0;

document.getElementById("clickCat").addEventListener("click", counterFunction, true);

function counterFunction() {
  click++;
  document.getElementById("clickCounter").innerHTML = "Cat Clicking Counter: " + click;
};
