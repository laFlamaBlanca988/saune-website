document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  const navbar = document.querySelector(".header-area");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      navLinks.forEach((link) => link.classList.remove("active"));

      e.target.classList.add("active");
      if (targetSection) {
        const navbarHeight = navbar.offsetHeight;
        let targetOffset = targetSection.offsetTop;

        window.scrollTo({
          top: targetOffset - navbarHeight,
          behavior: "smooth",
        });
      }
    });
  });

  function updateActiveLink() {
    // Find the section that is currently in the viewport
    let activeSection = null;

    navLinks.forEach((link) => {
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const rect = targetSection.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          activeSection = targetId;
        }
      }
    });

    // Update the active link
    navLinks.forEach((link) => {
      const targetId = link.getAttribute("href").substring(1);
      if (targetId === activeSection) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Add a scroll event listener to update the active link while scrolling
  window.addEventListener("scroll", updateActiveLink);

  // Call the function to set the initial active link
  updateActiveLink();
});
