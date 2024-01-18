const menuButton = document.querySelector(".nav-icons");
const sideBar = document.querySelector(".sidebar");
const closeMenuBtn = document.querySelector(".close-menu-btn");

menuButton.addEventListener("click", () => {
  // sideBar.style.display = "block";
  sideBar.classList.add("show-sidebar");
});
closeMenuBtn.addEventListener("click", () => {
  sideBar.classList.remove("show-sidebar");
});
