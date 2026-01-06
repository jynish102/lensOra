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

/*------------------------edit-------------------------------*/
const viewPostPopup = document.getElementById("viewPostPopup");
const viewPostImage = document.getElementById("viewPostImage");

function openViewPost(src) {
  viewPostImage.src = src;
  viewPostPopup.style.display = "flex";
}

viewPostPopup.addEventListener("click", function (e) {
  if (e.target === viewPostPopup) {
    viewPostPopup.style.display = "none";
  }
});
