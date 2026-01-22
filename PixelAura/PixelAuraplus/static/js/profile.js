
// ---------------- TAB SWITCH LOGIC ------------------------------------------
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-tab");

    // remove active from all tabs
    tabs.forEach(t => t.classList.remove("active"));

    // hide all contents
    tabContents.forEach(c => c.classList.remove("active"));

    // activate clicked tab
    tab.classList.add("active");

    // show related content
    document.getElementById(target).classList.add("active");
  });
});








/*3dot */
function togglePostMenu() {
  const menu = document.getElementById("postMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

/*------------------------ VIEW POST + COMMENT -------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const viewPostPopup = document.getElementById("viewPostPopup");
  const viewPostImage = document.getElementById("viewPostImage");
  const commentPostId = document.getElementById("commentPostId");

  // OPEN POST POPUP
  window.openViewPost = function (src, postId, caption) {
    viewPostImage.src = src;
    commentPostId.value = postId;   // ✅ THIS WAS MISSING
    
    document.getElementById("popupUsername").innerText =
      document.querySelector(".username").innerText;

    document.getElementById("popupCaption").innerText = caption;
    console.log("Caption received:", caption);


    viewPostPopup.style.display = "flex";
    document.body.style.overflow = "hidden";
  };
  // CLOSE POPUP
  viewPostPopup.addEventListener("click", function (e) {
    if (e.target === viewPostPopup) {
      viewPostPopup.style.display = "none";
      viewPostImage.src = "";
      commentPostId.value = "";     // optional cleanup
      document.body.style.overflow = "auto";
    }
  });
});



function toggleCommentMenu(el) {
  document
    .querySelectorAll(".comment-more")
    .forEach(m => m !== el && m.classList.remove("active"));

  el.classList.toggle("active");
}





