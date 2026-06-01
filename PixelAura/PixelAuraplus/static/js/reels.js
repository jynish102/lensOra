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


/*------------------video,paues---------------------------------------*/
document.querySelectorAll(".reel-container").forEach((reelBox) => {
  const type = reelBox.dataset.type;
  const video = reelBox.querySelector(".post-media");
  const soundBtn = reelBox.querySelector(".soundBtn");
  const tapIndicator = reelBox.querySelector(".tap-indicator");

  /* ✅ PHOTO POST → REMOVE VIDEO FEATURES */
  if (type === "image") {
    if (soundBtn) soundBtn.style.display = "none";
    if (tapIndicator) tapIndicator.style.display = "none";
    return;
  }
  /* ✅ STOP if video missing */
  if (!video) return;
  /* ✅ SOUND TOGGLE */
  soundBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    soundBtn.innerHTML = video.muted
      ? `<i class="bx bx-volume-mute"></i>`
      : `<i class="bx bx-volume-full"></i>`;
  });

  /* ✅ DOUBLE TAP TO PAUSE (NOT LIKE) */
  let lastTap = 0;
  video.addEventListener("click", () => {
    const now = new Date().getTime();
    if (now - lastTap < 300) {
      video.pause();
      tapIndicator.classList.add("show");

      setTimeout(() => {
        tapIndicator.classList.remove("show");
      }, 800);
    } else {
      video.play();
      tapIndicator.classList.remove("show");
    }
    lastTap = now;
  });
});
