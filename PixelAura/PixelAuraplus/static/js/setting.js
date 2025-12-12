
  const toggle = document.getElementById("privacyToggle");
  const statusText = document.getElementById("privacyStatus");

  toggle.addEventListener("change", function () {
    if (this.checked) {
      statusText.textContent = "Private";
    } else {
      statusText.textContent = "Public";
    }
  });

/*----------------------------- */
const openBtn = document.getElementById("openPhotoModal");
  const modal = document.getElementById("photoModal");
  const closeBtn = document.getElementById("closePhotoModal");
  const fileInput = document.querySelector(".upload input"); // FIXED
  const uploadBtn = document.querySelector(".photo-options.upload");
  const removeBtn = document.querySelector(".photo-options.remove");

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  fileInput.addEventListener("change", function () {
    const img = document.querySelector(".profile-left img");
    img.src = URL.createObjectURL(this.files[0]);
  });

  uploadBtn.addEventListener("click", () => {
  fileInput.click();    // open the computer file picker
  });

  removeBtn.addEventListener("click", () => {
  const img = document.querySelector(".profile-left img");
  img.src = "https://cdn-icons-png.flaticon.com/512/847/847969.png";
  modal.style.display = "none";  // optional: close modal
 });
