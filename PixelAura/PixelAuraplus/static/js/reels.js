// /*----------------Comment popul----------*/
// const commentBtn = document.querySelector(".commentBtn");
// const commentPopup = document.getElementById("commentPopup");
// const closeComment = document.querySelector(".closeComment");
// const sendComment = document.getElementById("sendComment");
// const commentInput = document.getElementById("commentInput");
// const commentList = document.getElementById("commentList");

// // Open comment popup
// commentBtn.addEventListener("click", () => {
//     commentPopup.style.display = "flex";
// });

// // Close popup
// closeComment.addEventListener("click", () => {
//     commentPopup.style.display = "none";
// });

// // Add comment
// sendComment.addEventListener("click", () => {
//     let text = commentInput.value.trim();
//     if (text === "") return;

//     let commentHTML = `
//         <div class="comment-item">
//             <img src="user-profile.jpg">
//             <div class="comment-content">${text}</div>
//         </div>
//     `;

//     commentList.innerHTML += commentHTML;
//     commentInput.value = "";
// })



/*-------------------------- like button------------------------- */
document.querySelectorAll(".likeBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const postId = btn.dataset.postId;
    if (!postId) {
      console.error("❌ postId missing on like button", btn);
      return;
    }

    const icon = btn.querySelector("i");
    const countSpan = btn.querySelector("span");

    fetch("/PixelAuraplus/toggle-like/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken"),
      },
      body: JSON.stringify({ post_id: postId }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Server error");
        return res.json();
      })
      .then((data) => {
        countSpan.innerText = data.count;

        if (data.status === "liked") {
          btn.classList.add("liked");
          icon.classList.replace("bx-heart", "bxs-heart");
        } else {
          btn.classList.remove("liked");
          icon.classList.replace("bxs-heart", "bx-heart");
        }
      })
      .catch((err) => console.error("LIKE ERROR:", err));
  });
});




// CSRF helper
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    document.cookie.split(";").forEach((cookie) => {
      cookie = cookie.trim();
      if (cookie.startsWith(name + "=")) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
      }
    });
  }
  return cookieValue;
}
