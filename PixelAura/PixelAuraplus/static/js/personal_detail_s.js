const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".ac-main-links a, .ac-settings a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (currentPage === linkPage) {
      const targetDiv = link.querySelector(".ac-link, .ac-item");
      if (targetDiv) {
        targetDiv.classList.add("ac-link-active");
      }
    }
  });