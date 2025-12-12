
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

openBtn.onclick = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

selectBtn.onclick = () => {
  fileInput.click();
};

fileInput.onchange = () => {
  modal.style.display = "none";
}




const openBtn = document.getElementById("openCreatePost");

const closeBtn = document.getElementById("closePostModal");
const selectBtn = document.getElementById("selectFromComputer");
const fileInput = document.getElementById("postFileInput");

const cropModal = document.getElementById("cropModal");
const cropImage = document.getElementById("cropImage");
const backBtn = document.getElementById("backToUpload");

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


