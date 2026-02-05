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
  
  const commentPostId = document.getElementById("commentPostId");

  window.openViewPost = function (src, postId, caption) {
    const popup = document.getElementById("viewPostPopup");
    const mediaBox = document.getElementById("viewMediaContainer");
    const commentPostId = document.getElementById("commentPostId");

    mediaBox.innerHTML = "";
    commentPostId.value = postId;

    document.getElementById("popupUsername").innerText =
      document.querySelector(".username")?.innerText || "User";

    document.getElementById("popupCaption").innerText = caption;

    // VIDEO
    if (src.toLowerCase().endsWith(".mp4")) {
      const video = document.createElement("video");
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.style.width = "100%";
      video.style.borderRadius = "12px";
      mediaBox.appendChild(video);
    }
    // IMAGE
    else {
      const img = document.createElement("img");
      img.src = src;
      img.style.width = "100%";
      img.style.borderRadius = "12px";
      mediaBox.appendChild(img);
    }

    loadComments(postId);

    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
  };


  viewPostPopup.addEventListener("click", function (e) {
    if (e.target === viewPostPopup) {
      viewPostPopup.style.display = "none";
      document.getElementById("viewMediaContainer").innerHTML = "";

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
                <button class="delete-btn"onclick="deleteComment(${c.id}, this)">Delete</button>
                <button class="cancel-btn">Cancel</button>
              </div>
            </div>
            `: ``
             }
          </div>
        `;
      });
    })
    .catch((err) => {
      console.error("Comment fetch error:", err);
    });
}

function deleteComment(commentId, btn) {
  if (!confirm("Delete this comment?")) return;

  fetch("/PixelAuraplus/delete-comment/", {
    method: "POST",
    headers: {
      "X-CSRFToken": getCSRFToken(),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `comment_id=${commentId}`,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        btn.closest(".comment-item").remove(); // 🔥 instant UI update
      } else {
        alert(data.error || "Delete failed");
      }
    });
}
function getCSRFToken() {
  return document.querySelector("[name=csrfmiddlewaretoken]").value;
}


function toggleCommentMenu(el) {
  document
    .querySelectorAll(".comment-more")
    .forEach((m) => m !== el && m.classList.remove("active"));

  el.classList.toggle("active");
}
