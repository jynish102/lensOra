document.addEventListener("DOMContentLoaded", function () {

  // PRIVACY TOGGLE
  const toggle = document.getElementById("privacyToggle");
  const statusText = document.getElementById("privacyStatus");

  if (toggle && statusText) {
    toggle.addEventListener("change", function () {
      statusText.textContent = this.checked ? "Private" : "Public";
    });
  }

  // PHOTO MODAL
  const openBtn = document.getElementById("openPhotoModal");
  const modal = document.getElementById("photoModal");
  const closeBtn = document.getElementById("closePhotoModal");
  const fileInput = document.querySelector(".upload input");
  const uploadBtn = document.querySelector(".photo-options.upload");
  const removeBtn = document.querySelector(".photo-options.remove");
  const profileImg = document.querySelector(".profile-left img");

  const DEFAULT_IMG = "https://cdn-icons-png.flaticon.com/512/847/847969.png";

  if (!openBtn || !modal) return; // SAFE GUARD

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  uploadBtn.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", function () {
    if (!this.files[0]) return;
    const url = URL.createObjectURL(this.files[0]);
    profileImg.src = url;
    profileImg.onload = () => URL.revokeObjectURL(url);
    modal.style.display = "none";
  });

  removeBtn.addEventListener("click", () => {
    profileImg.src = DEFAULT_IMG;
    modal.style.display = "none";
  });

});

console.log("SETTING JS LOADED");

