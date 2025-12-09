const profileCard = document.querySelector(".profile-card");
  const overlay = document.getElementById("cpOverlay");
  const closeBtns = document.querySelectorAll(".cp-close");

  // ✅ OPEN POPUP
  profileCard.addEventListener("click", () => {
    overlay.style.display = "flex";
  });

  // ✅ CLOSE POPUP
  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      overlay.style.display = "none";
    });
  });


  