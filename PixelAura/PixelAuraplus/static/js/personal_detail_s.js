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

/*------------------------------------------Popup-------------------------------------------------------*/
  const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const popup = document.getElementById("popup");

openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

setTimeout(() => {
  document.querySelectorAll(".toast").forEach(t => t.remove());
}, 3000);

