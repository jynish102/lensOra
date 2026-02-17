let selectedPostId = null;

const items = document.querySelectorAll(".image-item");
const actionBar = document.getElementById("postActions");
const editBtn = document.querySelector(".edit-btn");
const deleteBtn = document.querySelector(".delete-btn");
const deleteModal = document.getElementById("deleteModal");
const deleteLink = document.getElementById("deleteLink");
const charCount = document.getElementById("charCount");


items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((i) => i.classList.remove("selected"));
    item.classList.add("selected");

    selectedPostId = item.dataset.postId;

    actionBar.classList.add("active");
    editBtn.disabled = false;
    deleteBtn.disabled = false;
  });
});


/* DELETE */
deleteBtn.addEventListener("click", () => {
  if (!selectedPostId) return;

  // ✅ set delete link dynamically
  deleteLink.href = `/PixelAuraplus/delete-post/${selectedPostId}/`;

  deleteModal.classList.add("active");
});

function closeDeleteModal() {
  deleteModal.classList.remove("active");
}


const editModal = document.getElementById("editPostModal");
const editPostImage = document.getElementById("editPostImage");
const editPostId = document.getElementById("editPostId");
const editCaption = document.getElementById("editCaption");
const editMediaBox = document.getElementById("editMediaBox");

/* OPEN EDIT MODAL */
editBtn.addEventListener("click", () => {
  if (!selectedPostId) return;

  const selectedItem = document.querySelector(".image-item.selected");
  const selectedImg = selectedItem.querySelector("img");
  const selectedVideo = selectedItem.querySelector("video");

   editMediaBox.innerHTML = "";

  if (selectedImg) {
    editMediaBox.innerHTML = `
      <img id="editPostImage" src="${selectedImg.src}">
    `;
  } 
  else if (selectedVideo) {
    const videoSrc = selectedVideo.querySelector("source").src;
    editMediaBox.innerHTML = `
      <video controls autoplay muted loop>
        <source src="${videoSrc}" type="video/mp4">
      </video>
    `;
  }

  editPostId.value = selectedPostId;

  const caption = selectedItem.dataset.caption || "";
  editCaption.value = caption;
  charCount.innerText = caption.length;

  document.body.style.overflow = "hidden";
  editModal.classList.add("active");
});
editCaption.addEventListener("input", () => {
  charCount.innerText = editCaption.value.length;
});

/* CLOSE EDIT MODAL */
function closeEditModal() {
  document.body.style.overflow = "auto";
  editModal.classList.remove("active");
}
