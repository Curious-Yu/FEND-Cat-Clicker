var click = 0;

document.getElementById('sleepyCat').addEventListener("click",
function catOpen(){
  document.querySelector('#testing').classList.toggle('hide');
});

document.getElementById("catPic").addEventListener("click", counterFunction);

// function for the click counter //
function counterFunction() {
  click++;
  document.getElementById("clickCounter").innerHTML = "Cat Clicking Counter: " + click;
};
