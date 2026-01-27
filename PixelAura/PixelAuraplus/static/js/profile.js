// ---------------- TAB SWITCH LOGIC ------------------------------------------
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-tab");

    tabs.forEach((t) => t.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});

/*------------------------ VIEW POST + COMMENT -------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const viewPostPopup = document.getElementById("viewPostPopup");
  const viewPostImage = document.getElementById("viewPostImage");
  const commentPostId = document.getElementById("commentPostId");

  window.openViewPost = function (src, postId, caption) {
    viewPostImage.src = src;
    commentPostId.value = postId;

    document.getElementById("popupUsername").innerText =
      document.querySelector(".username").innerText;

    document.getElementById("popupCaption").innerText = caption;

    loadComments(postId);

    viewPostPopup.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  viewPostPopup.addEventListener("click", function (e) {
    if (e.target === viewPostPopup) {
      viewPostPopup.style.display = "none";
      viewPostImage.src = "";
      commentPostId.value = "";
      document.body.style.overflow = "auto";
    }
  });
});

function loadComments(postId) {
  fetch(`/PixelAuraplus/get-comments/?post_id=${postId}`)
    .then((res) => res.json())
    .then((data) => {
      const commentList = document.getElementById("commentList");
      commentList.innerHTML = "";

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

function toggleCommentMenu(el) {
  document
    .querySelectorAll(".comment-more")
    .forEach((m) => m !== el && m.classList.remove("active"));

  el.classList.toggle("active");
}
