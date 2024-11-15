 // Dark mode toggle script
 const toggleButton = document.getElementById('mode');
 toggleButton.addEventListener('click', () => {
   document.body.classList.toggle('mode');

 });

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});