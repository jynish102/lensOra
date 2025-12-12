/*----------------Comment popul----------*/
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
