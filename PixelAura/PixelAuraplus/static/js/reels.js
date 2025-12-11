const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");

const modeText = document.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});


document.querySelectorAll(".switch-appearance").forEach(toggle => {
  const icon = toggle.querySelector(".appearance-icon");
  const text = toggle.querySelector(".appearance-text");

  // ✅ Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    icon.classList.replace("bx-moon", "bx-sun");
    text.innerText = "Light Mode";
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      icon.classList.replace("bx-moon", "bx-sun");
      text.innerText = "Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      icon.classList.replace("bx-sun", "bx-moon");
      text.innerText = "Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });
});







/*------------------video,paues---------------------------------------*/
document.querySelectorAll(".reel-container").forEach(reelBox => {

    const type = reelBox.dataset.type;
    const video = reelBox.querySelector(".post-media");
    const soundBtn = reelBox.querySelector(".soundBtn");
    const tapIndicator = reelBox.querySelector(".tap-indicator");

    /* ✅ PHOTO POST → REMOVE VIDEO FEATURES */
    if (type === "photo") {
        if (soundBtn) soundBtn.style.display = "none";
        if (tapIndicator) tapIndicator.style.display = "none";
        return;
    }

    /* ✅ SOUND TOGGLE */
    soundBtn.addEventListener("click", () => {
        video.muted = !video.muted;
        soundBtn.innerHTML = video.muted
            ? <i class="bx bx-volume-mute"></i>
            : <i class="bx bx-volume-full"></i>;
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
        }else{
            video.play();
            tapIndicator.classList.remove("show");
        }
        lastTap = now;
    });

});

/*-------------------------- like button------------------------- */
document.querySelectorAll(".likeBtn").forEach(btn => {
    btn.addEventListener("click", () => {

        const icon = btn.querySelector("i");
        const countSpan = btn.querySelector("span");

        let count = parseInt(countSpan.innerText.replace("k", "")) || 0;

        if (btn.classList.contains("liked")) {
            // ✅ UNLIKE
            btn.classList.remove("liked");
            icon.classList.replace("bxs-heart", "bx-heart");
            countSpan.innerText = (count - 1) + "k";
        } else {
            // ✅ LIKE
            btn.classList.add("liked");
            icon.classList.replace("bx-heart", "bxs-heart");
            countSpan.innerText = (count + 1) + "k";
        }
    });
});

/*----------------------more setting------------------- */
const moreToggle = document.getElementById("moreToggle");
const moreDropdown = document.getElementById("moreDropdown");

moreToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  moreDropdown.classList.toggle("show");
});

document.addEventListener("click", () => {
  moreDropdown.classList.remove("show");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    moreDropdown.classList.remove("show");
  }
});



function openPopup() {
    document.getElementById("addPostPopup").style.display = "flex";
}

function closePopup() {
    // Instead of closing directly → show discard confirmation
    document.getElementById("discardPopup").style.display = "flex";
}

function closeDiscard() {
    document.getElementById("discardPopup").style.display = "none";
}

function discardPost() {
    document.getElementById("discardPopup").style.display = "none";
    document.getElementById("addPostPopup").style.display = "none";

    // Reset preview
    const img = document.getElementById("previewImg");
    img.style.display = "none";
    img.src = "";

    // SHOW upload area again
    document.querySelector(".upload-area").style.display = "flex";

    // Clear caption
    document.querySelector(".caption-box").value = "";
}


    // Optional: Clear preview & caption
    document.getElementById("previewImg").style.display = "none";
    document.getElementById("previewImg").src = "";
    document.querySelector(".caption-box").value = "";


function previewImage(event) {
    const img = document.getElementById("previewImg");
    img.src = URL.createObjectURL(event.target.files[0]);
    img.style.display = "block";

    // HIDE upload area
    document.querySelector(".upload-area").style.display = "none";
}


function previewMedia(event) {
    const file = event.target.files[0];

    const imagePreview = document.getElementById("previewImg");
    const videoPreview = document.getElementById("previewVideo");

    // Reset both
    imagePreview.style.display = "none";
    videoPreview.style.display = "none";

    // Hide upload area
    document.querySelector(".upload-area").style.display = "none";

    // Check file type
    if (file.type.startsWith("image/")) {
        imagePreview.src = URL.createObjectURL(file);
        imagePreview.style.display = "block";
    } 
    else if (file.type.startsWith("video/")) {
        videoPreview.src = URL.createObjectURL(file);
        videoPreview.style.display = "block";
    }
}



document.getElementById("previewImg").src = "";
document.getElementById("previewVideo").src = "";
document.getElementById("previewVideo").style.display = "none";


document.querySelector(".upload-area").style.display = "flex";
/----------------Comment popul----------/
const commentBtn = document.querySelector(".commentBtn");
const commentPopup = document.getElementById("commentPopup");
const closeComment = document.querySelector(".closeComment");
const sendComment = document.getElementById("sendComment");
const commentInput = document.getElementById("commentInput");
const commentList = document.getElementById("commentList");

// Open comment popup
commentBtn.addEventListener("click", () => {
    commentPopup.style.display = "flex";
});

// Close popup
closeComment.addEventListener("click", () => {
    commentPopup.style.display = "none";
});

// Add comment
sendComment.addEventListener("click", () => {
    let text = commentInput.value.trim();
    if (text === "") return;

    let commentHTML = `
        <div class="comment-item">
            <img src="user-profile.jpg">
            <div class="comment-content">${text}</div>
        </div>
    `;

    commentList.innerHTML += commentHTML;
    commentInput.value = "";
})