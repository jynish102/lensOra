/* ---------------- VIEW POST + COMMENTS ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  const viewPostPopup = document.getElementById("viewPostPopup");
  const mediaBox = document.getElementById("viewMediaContainer");
  const commentList = document.getElementById("commentList");
  const captionEl = document.getElementById("popupCaption");
  const postIdInput = document.getElementById("commentPostId");

  // OPEN POST POPUP (IMAGE OR VIDEO)
  window.openViewPost = function (src, postId, caption) {
    mediaBox.innerHTML = ""; // clear previous media
    postIdInput.value = postId;
    captionEl.innerText = caption || "";

    // VIDEO
    if (src.toLowerCase().endsWith(".mp4")) {
      const video = document.createElement("video");
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.className = "popup-video";
      mediaBox.appendChild(video);
    }
    // IMAGE
    else {
      const img = document.createElement("img");
      img.src = src;
      img.className = "popup-image";
      mediaBox.appendChild(img);
    }

    commentList.innerHTML = "";
    loadComments(postId);

    viewPostPopup.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  // CLOSE POPUP BUTTON
  const closeBtn = document.querySelector(".close-popup");
  if (closeBtn) {
    closeBtn.addEventListener("click", closePopup);
  }

  // CLICK OUTSIDE CLOSE
  viewPostPopup.addEventListener("click", (e) => {
    if (e.target === viewPostPopup) closePopup();
  });

  function closePopup() {
    viewPostPopup.style.display = "none";
    mediaBox.innerHTML = "";
    commentList.innerHTML = "";
    document.body.style.overflow = "auto";
  }

  // FETCH COMMENTS
  function loadComments(postId) {
    fetch(`/PixelAuraplus/get-comments/?post_id=${postId}`)
      .then((res) => res.json())
      .then((data) => {
        commentList.innerHTML = "";

        if (!data.comments || data.comments.length === 0) {
          commentList.innerHTML = "<p class='no-comments'>No comments yet</p>";
          return;
        }

        data.comments.forEach((c) => {
          commentList.innerHTML += `
            <div class="comment-item" data-id="${c.id}">
              <img src="${c.image || "/static/images/default-user.webp"}"
                   class="comment-user-img">

              <div class="comment-text">
                <b>${c.username}</b>
                <span>${c.comment}</span>
              </div>

              ${
                c.is_owner
                  ? `
                <div class="comment-more" onclick="toggleCommentMenu(this)">
                  <i class="bx bx-dots-horizontal-rounded"></i>
                  <div class="comment-menu">
                    <button class="delete-btn" onclick="deleteComment(${c.id}, this)">Delete</button>
                    <button class="cancel-btn">Cancel</button>
                  </div>
                </div>`
                  : ""
              }
            </div>
          `;
        });
      })
      .catch((err) => console.error("Comment fetch error:", err));
  }
});

/* ---------------- DELETE COMMENT ---------------- */
function deleteComment(commentId, btn) {
  if (!confirm("Delete this comment?")) return;

  fetch("/PixelAuraplus/delete-comment/", {
    method: "POST",
    headers: {
      "X-CSRFToken": document.querySelector("[name=csrfmiddlewaretoken]").value,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `comment_id=${commentId}`,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        btn.closest(".comment-item").remove();
      } else {
        alert("Delete failed");
      }
    });
}

/* ---------------- COMMENT MENU ---------------- */
function toggleCommentMenu(el) {
  document
    .querySelectorAll(".comment-more")
    .forEach((m) => m !== el && m.classList.remove("active"));

  el.classList.toggle("active");
}
/*-------------------------follow popup----------------------------------- */
const followingModal = document.getElementById("followModal");
const followersModal = document.getElementById("followersModal");

const followingBtn = document.getElementById("followingBtn");
const followerBtn = document.getElementById("followerBtn");

/* OPEN FOLLOWING */
followingBtn.addEventListener("click", () => {
  followingModal.classList.add("active");
  document.body.style.overflow = "hidden";
});

/* OPEN FOLLOWERS */
followerBtn.addEventListener("click", () => {
  followersModal.classList.add("active");
  document.body.style.overflow = "hidden";
});

/* CLOSE FOLLOWING */
function closeFollowModal() {
  followingModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

/* CLOSE FOLLOWERS */
function closeFollowersModal() {
  followersModal.classList.remove("active");
  document.body.style.overflow = "auto";
}
/*-------------------------------------end popup--------------------------- */
