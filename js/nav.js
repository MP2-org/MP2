//  search button

var app = new Vue({
  el: "#app",
  data: { state: "close" },
});

//Dog running

window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector("#loader").classList.add("loading-done");
  }, 3000);
});

// Responsive navbar

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

//effect scrolly

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// faq

let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("content5");
let icons = document.getElementsByClassName("icon5");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.color = "#FFFFFF";
      icons[i].classList.remove("bi-plus");
      icons[i].classList.add("bi-dash");
    } else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#000000";
      icons[i].classList.remove("bi-dash");
      icons[i].classList.add("bi-plus");
    }
    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = "0px";
        toggles[j].style.color = "#000000";
        icons[j].classList.remove("bi-dash");
        icons[j].classList.add("bi-plus");
      }
    }
  });
}
