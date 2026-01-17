/* cmt -------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const viewPostPopup = document.getElementById("viewPostPopup");
  const viewPostImage = document.getElementById("viewPostImage");

  if (!viewPostPopup || !viewPostImage) {
    console.error("Popup or Image element not found!");
    return;
  }

  // GLOBAL function (called from onclick)
  window.openViewPost = function (imageUrl, postId) {
    viewPostImage.src = imageUrl;

    const postIdInput = document.getElementById("commentPostId");
    if (postIdInput) {
      postIdInput.value = postId;
    }

    viewPostPopup.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  // Close when clicking outside popup
  viewPostPopup.addEventListener("click", (e) => {
    if (e.target === viewPostPopup) {
      closePopup();
    }
  });

  // Close button (X)
  const closeBtn = document.querySelector(".close-popup");
  if (closeBtn) {
    closeBtn.addEventListener("click", closePopup);
  }

  function closePopup() {
    viewPostPopup.style.display = "none";
    viewPostImage.src = "";
    document.body.style.overflow = "auto";
  }
});
