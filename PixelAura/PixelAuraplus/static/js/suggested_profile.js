/* ---------------- VIEW POST + COMMENTS ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  const viewPostPopup = document.getElementById("viewPostPopup");
  const viewPostImage = document.getElementById("viewPostImage");
  const commentList = document.getElementById("commentList");
  const captionEl = document.getElementById("popupCaption");
  const postIdInput = document.getElementById("commentPostId");

  // OPEN POST POPUP (GLOBAL)
  window.openViewPost = function (imageUrl, postId, caption) {
    viewPostImage.src = imageUrl;
    postIdInput.value = postId;
    captionEl.innerText = caption || "";

    commentList.innerHTML = ""; // clear old comments
    loadComments(postId);

    viewPostPopup.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  // CLOSE POPUP
  const closeBtn = document.querySelector(".close-popup");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      viewPostPopup.style.display = "none";
      viewPostImage.src = "";
      commentList.innerHTML = "";
      document.body.style.overflow = "auto";
    });
  }

  // FETCH COMMENTS
  function loadComments(postId) {
    fetch(`/PixelAuraplus/get-comments/?post_id=${postId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.comments || data.comments.length === 0) {
          commentList.innerHTML = "<p class='no-comments'>No comments yet</p>";
          return;
        }

        data.comments.forEach((c) => {
          commentList.innerHTML += `
            <div class="comment-item">
              <img src="${c.image || "/static/images/default-user.webp"}"
                   class="comment-user-img">
              <div class="comment-text">
                <b>${c.username}</b>
                <span>${c.comment}</span>
              </div>

              <div class="comment-more" onclick="toggleCommentMenu(this)">
                <i class="bx bx-dots-horizontal-rounded"></i>
                <div class="comment-menu">
                  <button class="delete-btn">Delete</button>
                  <button class="cancel-btn">Cancel</button>
                </div>
              </div>
            </div>
          `;
        });
      })
      .catch((err) => {
        console.error("Comment fetch error:", err);
      });
  }
});

/* ---------------- COMMENT MENU ---------------- */
function toggleCommentMenu(el) {
  document
    .querySelectorAll(".comment-more")
    .forEach((m) => m !== el && m.classList.remove("active"));

  el.classList.toggle("active");
}
