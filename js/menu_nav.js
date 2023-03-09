(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("header-mobile");
    //oculta etiquetas sobrantes a del nav

    document.querySelector(".logo").style.display = "none";
    document.querySelector(".nav-menu.ul").style.display = "flex";
    document.querySelector(".contacts-menu").style.display = "flex";
    //--------------
    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener("click", toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

//para cambiar el icono menu

function toggleMenuIcon() {
  var icons = document.querySelectorAll(".icon, .icon-x");
  icons.forEach(function (icon) {
    icon.classList.toggle("active");
  });
}
