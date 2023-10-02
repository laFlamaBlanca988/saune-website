document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  const navbar = document.querySelector(".header-area");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1); // Remove the '#' character
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const navbarHeight = navbar.offsetHeight;
        let targetOffset = targetSection.offsetTop;
        console.log(navbarHeight);
        console.log(targetOffset);

        window.scrollTo({
          top: targetOffset - navbarHeight,
          behavior: "smooth",
        });
      }
    });
  });
});
