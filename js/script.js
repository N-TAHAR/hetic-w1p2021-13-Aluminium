console.log("ça marche");

var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');

var menu = document.getElementById('menu');
var opener = document.getElementById('open-menu');
var menuIconFirst = document.getElementById('menu-icon-first');
var menuIconLast = document.getElementById('menu-icon-last');

var dropDownOpener = document.getElementById('drop-down');
var dropDownMenu = document.getElementById('drop-down-menu');
var dropDownItem = document.querySelectorAll('.drop-down-item');

//image product transition
window.addEventListener('scroll', function () {
  if (first.getBoundingClientRect().top <= window.innerHeight * 0.75 && first.getBoundingClientRect().top > 0) {
    first.classList.add('isTriggered');
  }
  if (second.getBoundingClientRect().top <= window.innerHeight * 0.75 && second.getBoundingClientRect().top > 0) {
    second.classList.add('isTriggered');
  }
  if (third.getBoundingClientRect().top <= window.innerHeight * 0.75 && third.getBoundingClientRect().top > 0) {
    third.classList.add('isTriggered');
  }
})

//burger menu
opener.addEventListener('click', function () {
  menu.classList.toggle('is-open');
  menuIconFirst.classList.toggle('rotateToCrossFirst');
  menuIconLast.classList.toggle('rotateToCrossLast');
});


//menu
dropDownOpener.addEventListener('click', function () {
  dropDownMenu.classList.toggle('isDropped');
  for (let i = 0; i < dropDownItem.length; i++) {
    dropDownItem[i].classList.toggle('isDisplayed');
  }
})