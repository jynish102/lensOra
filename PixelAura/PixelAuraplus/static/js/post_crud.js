let selectedPostId = null;

const items = document.querySelectorAll(".image-item");
const actionBar = document.getElementById("postActions");
const editBtn = document.querySelector(".edit-btn");
const deleteBtn = document.querySelector(".delete-btn");
const deleteModal = document.getElementById("deleteModal");
const deleteLink = document.getElementById("deleteLink");

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

/* EDIT */
editBtn.addEventListener("click", () => {
  if (!selectedPostId) return;
  window.location.href = `/edit-post/${selectedPostId}/`;
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
