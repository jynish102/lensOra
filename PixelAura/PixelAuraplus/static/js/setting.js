document.addEventListener("DOMContentLoaded", () => {

  const openBtn = document.getElementById("openPhotoModal");
  const modal = document.getElementById("photoModal");
  const closeBtn = document.getElementById("closePhotoModal");
  const uploadBtn = document.querySelector(".uploadBtn");
  const removeBtn = document.querySelector(".removeBtn");

  const fileInput = document.getElementById("profileImageInput");
  const profileImg = document.getElementById("profilePreview");

  const DEFAULT_IMG = "https://cdn-icons-png.flaticon.com/512/847/847969.png";

  if (!openBtn || !modal || !fileInput) return;

  // Open modal
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close on backdrop click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Upload Photo — opens file picker
  uploadBtn.addEventListener("click", () => {
    fileInput.click(); // this triggers the browser file picker
  });

  // Preview selected image
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    profileImg.src = url;
    profileImg.onload = () => URL.revokeObjectURL(url);

    modal.style.display = "none"; // close popup after selection
  });

  // Remove Photo — resets preview
  removeBtn.addEventListener("click", () => {
    profileImg.src = DEFAULT_IMG;
    fileInput.value = ""; // ensures nothing is uploaded
    modal.style.display = "none";
  });

  console.log("SETTING JS LOADED");

  const bioInput = document.getElementById("bioInput");
const bioCount = document.getElementById("bioCount");
const bioError = document.getElementById("bioError");

const BIO_LIMIT = 150;

bioInput.addEventListener("input", () => {
  const currentLength = bioInput.value.length;
  bioCount.textContent = `${currentLength} / ${BIO_LIMIT}`;

  if (currentLength > BIO_LIMIT) {
    bioError.style.display = "block";
  } else {
    bioError.style.display = "none";
  }
});

// Optional: Prevent form submit if bio exceeds limit
const editProfileForm = document.getElementById("editProfileForm");
editProfileForm.addEventListener("submit", (e) => {
  if (bioInput.value.length > BIO_LIMIT) {
    e.preventDefault();
    bioError.style.display = "block";
    bioInput.focus();
  }
});


});
