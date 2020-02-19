/* Скрипт прокрутки страницы к старту */

var timeOut;
function goUp() {
  let top = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );
  if (top > 0) {
    window.scrollBy(0, -100);
    timeOut = setTimeout("goUp()", 20);
  } else clearTimeout(timeOut);
}
/* Попап */

var moreInfo = document.querySelectorAll(".icon-description");
var popUp = document.querySelector(".pop-up");
var close = document.querySelector(".close");

function open() {
  popUp.classList.add("active-pop");
  document.querySelector("body").style.overflow = "hidden";
}
function closePop() {
  popUp.classList.remove("active-pop");
  document.querySelector("body").style.overflow = "visible";
}
for (let i = 0; i < moreInfo.length; i++) {
  moreInfo[i].addEventListener("click", open);
  close.addEventListener("click", closePop);
}

/* Всплытие вспомогательного меню с проектами */

const under = document.querySelectorAll(".under");

const projects = document.querySelectorAll(".projects");

const projectsItem = document.querySelectorAll(".projects__item");

function showSub(event) {
  var target = event.currentTarget;
  target.classList.add("act");
  var getValue = target.children[0].textContent;
  var pushValue = document.querySelector(".active-item");
  pushValue.innerHTML = getValue;
  target.children[1].classList.add("active");
}

function hideSub() {
  for (let i = 0; i < projects.length; i++) {
    projects[i].parentNode.parentElement.classList.remove("act");
    projects[i].parentNode.classList.remove("active");
  }
}

for (let i = 0; i < under.length; i++) {
  under[i].addEventListener("click", hideSub);
  under[i].addEventListener("click", showSub);
}

/* Активные проекты */

function changeColor(event) {
  var newTarget = event.currentTarget;
  var getAtt = newTarget.children[0].getAttribute("src");
  newTarget.style.color = "#6F6EFF";
  newTarget.children[0].setAttribute("src", "active" + getAtt);
}
function returnColor() {
  debugger;
  for (let i = 0; i < projectsItem.length; i++) {
    var newAtt = projectsItem[i].children[0].getAttribute("src");
    var pattern = /active/;
    var check = pattern.test(newAtt);
    if (check) {
      newAtt = newAtt.slice(6);
      projectsItem[i].children[0].setAttribute("src", newAtt);
      projectsItem[i].style.color = "#5E5E7B";
    }
  }
}
for (let i = 0; i < projectsItem.length; i++) {
  projectsItem[i].addEventListener("click", returnColor);
  projectsItem[i].addEventListener("click", changeColor);
}
