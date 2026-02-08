(() => {
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");
  const year = document.getElementById("year");
  const detailsList = Array.from(document.querySelectorAll(".faq-list details"));

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const opened = siteNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(opened));
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  detailsList.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      detailsList.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
