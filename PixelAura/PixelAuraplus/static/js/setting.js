document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openPhotoModal");
  const modal = document.getElementById("photoModal");
  const closeBtn = document.getElementById("closePhotoModal");
  const uploadBtn = document.querySelector(".uploadBtn");
  const removeBtn = document.querySelector(".removeBtn");

  const fileInput = document.getElementById("profileImageInput");
  const profileImg = document.getElementById("profilePreview");

  const editTab = document.getElementById("editProfileTab");
  const privacyTab = document.getElementById("privacyTab");

  const editSection = document.querySelector(".edit-profile");
  const privacySection = document.querySelector(".privacy-section");
  const toast = document.querySelector(".toast-message");

if (toast) {
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 3000);
}

  const DEFAULT_IMG = "https://cdn-icons-png.flaticon.com/512/847/847969.png";

  if (openBtn && modal && fileInput) {
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

    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      if (!file) return;
      // allowed formats
      const allowedTypes = [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/webp",
      ];

      if (!allowedTypes.includes(file.type)) {
        alert("Only JPG, PNG, and WEBP images are allowed.");
        fileInput.value = "";
        return;
      }

      const url = URL.createObjectURL(file);
      profileImg.src = url;
      profileImg.onload = () => URL.revokeObjectURL(url);

      modal.style.display = "none";
    });

    removeBtn.addEventListener("click", () => {
      profileImg.src = DEFAULT_IMG;
      fileInput.value = "";
      modal.style.display = "none";
    });
  }

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

  /*------------------------account Privacy------------------------ */
  const toggle = document.getElementById("privacyToggle");
  const privacyModal = document.getElementById("privacyModal");
  const confirmBtn = document.getElementById("confirmPrivate");
  const cancelBtn = document.getElementById("cancelPrivate");

  if (!toggle) return;
  let previousState = toggle.checked;
  let isManualChange = false; // ✅ ADD THIS LINE

  /* CLICK TOGGLE */
  if (toggle) {
    toggle.addEventListener("change", function () {
      if (isManualChange) {
        isManualChange = false;
        return;
      }

      if (this.checked) {
        // only show modal when turning ON (private)
        privacyModal.classList.add("active");
        document.body.style.overflow = "hidden";

        // revert temporarily until confirm
        this.checked = false;
      } else {
        // directly make public without modal
        updatePrivacy(0);
      }
    });
  }

  /* CONFIRM */
  if (confirmBtn) {
    confirmBtn.addEventListener("click", function () {
      isManualChange = true;
      toggle.checked = true;
      updatePrivacy(1);
    });
  }

  /* CANCEL */
if (cancelBtn) {
  cancelBtn.addEventListener("click", function () {
    toggle.checked = previousState;
    privacyModal.classList.remove("active");
    document.body.style.overflow = "auto";
  });
}  

  /* function */
  function updatePrivacy(status) {
    fetch("/PixelAuraplus/update-privacy/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-CSRFToken": document.querySelector("[name=csrfmiddlewaretoken]")
          .value,
      },
      body: "status=" + status,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Privacy Updated:", status);

        // ✅ Force correct toggle state
        toggle.checked = status === 1;

        // ✅ Save new state
        previousState = toggle.checked;

        // ✅ Close modal automatically
        privacyModal.classList.remove("active");
        document.body.style.overflow = "auto";
      });
  }

  editSection.style.display = "block";
  privacySection.style.display = "none";

  // active state
  editTab.classList.add("active");
  privacyTab.classList.remove("active");

  editTab.addEventListener("click", (e) => {
    e.preventDefault();

    editSection.style.display = "block";
    privacySection.style.display = "none";

    editTab.classList.add("active");
    privacyTab.classList.remove("active");
  });

  privacyTab.addEventListener("click", () => {
    // show privacy
    editSection.style.display = "none";
    privacySection.style.display = "block";

    // active state
    privacyTab.classList.add("active");
    editTab.classList.remove("active");
  });

  console.log(toggle);
});
