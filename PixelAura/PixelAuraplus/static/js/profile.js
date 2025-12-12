const hasPosts = false; // change to true when backend sends posts
if (hasPosts) {
    document.getElementById("emptyState").style.display = "none";
  }
document.querySelector(".gs-btn").onclick = () => {
  alert("Open upload modal here");
};
/*------------first popup-------------------------------------- */

const openBtn = document.getElementById("openCreatePost");
const modal = document.getElementById("createPostModal");
const closeBtn = document.getElementById("closePostModal");
const selectBtn = document.getElementById("selectFromComputer");
const fileInput = document.getElementById("postFileInput");

const cropModal = document.getElementById("cropModal");
const cropImage = document.getElementById("cropImage");
const backBtn = document.getElementById("backToUpload");
const closeCrop = document.getElementById("closeCrop");

const discardModal = document.getElementById("discardModal");
const confirmDiscard = document.getElementById("confirmDiscard");
const cancelDiscard = document.getElementById("cancelDiscard");

/* ✅ OPEN FIRST POPUP */
openBtn.onclick = () => {
  modal.style.display = "flex";
};

/* ✅ CLOSE FIRST POPUP */
closeBtn.onclick = () => {
  modal.style.display = "none";
};

/* ✅ OPEN FILE PICKER */
selectBtn.onclick = () => {
  fileInput.click();
};

/* ✅ AFTER FILE SELECT → OPEN CROP POPUP */
fileInput.onchange = () => {
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      cropImage.src = reader.result;
      modal.style.display = "none";
      cropModal.style.display = "flex";
    };
    reader.readAsDataURL(file);
  }
};

/* ✅ BACK BUTTON FROM CROP */
backBtn.onclick = () => {
  cropModal.style.display = "none";
  modal.style.display = "flex";
};

/* ✅ X BUTTON → OPEN DISCARD POPUP */
closeCrop.onclick = () => {
  discardModal.style.display = "flex";
};

/* ✅ CANCEL DISCARD */
cancelDiscard.onclick = () => {
  discardModal.style.display = "none";
};

/* ✅ CONFIRM DISCARD */
confirmDiscard.onclick = () => {
  discardModal.style.display = "none";
  cropModal.style.display = "none";
  modal.style.display = "none";
  fileInput.value = ""; // clear file input
};


/*--------------------------------------------------------*/

  const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // ✅ Remove active from all tabs
    tabs.forEach(t => t.classList.remove("active"));

    // ✅ Hide all tab contents (INCLUDING POSTS)
    contents.forEach(c => c.classList.remove("active"));

    // ✅ Activate clicked tab
    tab.classList.add("active");

    const target = tab.getAttribute("data-tab");
    const activeContent = document.getElementById(target);

    if (activeContent) {
      activeContent.classList.add("active");
    }

  });
});
