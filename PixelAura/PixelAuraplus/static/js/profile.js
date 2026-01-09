
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

/*------------------------cmt-------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const viewPostPopup = document.getElementById("viewPostPopup");
  const viewPostImage = document.getElementById("viewPostImage");

  window.openViewPost = function (src) {
    viewPostImage.src = src;
    viewPostPopup.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  viewPostPopup.addEventListener("click", function (e) {
    if (e.target === viewPostPopup) {
      viewPostPopup.style.display = "none";
      viewPostImage.src = "";
      document.body.style.overflow = "auto";
    }
  });
});



/*cmt post-------------------------------- */
function openPostMenu() {
  document.getElementById("postMenuOverlay").style.display = "flex";
}

function closePostMenu() {
  document.getElementById("postMenuOverlay").style.display = "none";
}

function openEditPost() {
  closePostMenu();

  // copy image from view popup
  document.getElementById("editPostImage").src =
    document.getElementById("viewPostImage").src;

  document.getElementById("editPostPopup").style.display = "flex";
}

function closeEditPost() {
  document.getElementById("editPostPopup").style.display = "none";
}


/*3dot */
function togglePostMenu() {
  const menu = document.getElementById("postMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}


/*---------------------------editpost---------------------------------- */

