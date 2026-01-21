/* cmt -------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const viewPostPopup = document.getElementById("viewPostPopup");
  const viewPostImage = document.getElementById("viewPostImage");

  if (!viewPostPopup || !viewPostImage) {
    console.error("Popup or Image element not found!");
    return;
  }

  // GLOBAL function (called from onclick)
  window.openViewPost = function (imageUrl, postId, caption) {
    viewPostImage.src = imageUrl;

    const postIdInput = document.getElementById("commentPostId");
    if (postIdInput) {
      postIdInput.value = postId;
    }

    // ✅ SET CAPTION
    const captionEl = document.getElementById("popupCaption");
    if (captionEl) {
      captionEl.innerText = caption || "";
    }

    viewPostPopup.style.display = "flex";
    document.body.style.overflow = "hidden";
  };


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

  document.getElementById("popupCaption").innerText = caption;
  console.log(caption)

});
