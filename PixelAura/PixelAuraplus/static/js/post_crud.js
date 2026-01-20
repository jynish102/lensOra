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

/* OPEN EDIT MODAL */
editBtn.addEventListener("click", () => {
  if (!selectedPostId) return;

  const selectedItem = document.querySelector(".image-item.selected");
  const selectedImg = selectedItem.querySelector("img");

  editPostImage.src = selectedImg.src;
  editPostId.value = selectedPostId;

  const caption = selectedItem.dataset.caption || "";
  editCaption.value = caption;
  charCount.innerText = caption.length; // ✅ FIX

  editModal.classList.add("active");
});

editCaption.addEventListener("input", () => {
  charCount.innerText = editCaption.value.length;
});


/* CLOSE EDIT MODAL */
function closeEditModal() {
  editModal.classList.remove("active");
}
