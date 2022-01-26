let navItems = document.querySelectorAll(".menu-area a");

[...navItems].forEach((item) => {
  let currentLocation = location.href;
  if (item.href === currentLocation) {
    item.className = "active-menu";
  }
});
