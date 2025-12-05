const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const modeSwitch = document.querySelector(".toggle-switch");
const modeText = document.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

/* DARK MODE */
modeSwitch.addEventListener("click", (e) => {
    e.stopPropagation();
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Dark Mode";
    }
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












