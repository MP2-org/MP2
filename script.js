
window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('#loader').classList.add('loading-done');
  }, 6000);
});


const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("show");
  menuIcon.classList.toggle("active");
});
