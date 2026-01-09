// function getCookie(name) {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== "") {
//     const cookies = document.cookie.split(";");
//     for (let cookie of cookies) {
//       cookie = cookie.trim();
//       if (cookie.startsWith(name + "=")) {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }







// const followBtn = document.getElementById("followBtn");

// if (followBtn) {
//   followBtn.addEventListener("click", () => {
//     const url = followBtn.dataset.followUrl;

//     fetch(url, {
//       method: "POST",
//       headers: {
//         "X-CSRFToken": getCookie("csrftoken"),
//         "Content-Type" : "application/json"
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         followBtn.innerText =
//           data.status === "followed" ? "Following" : "Follow";
//       });
//       .catch(err => console.error(err));
//   });
// }

// // document.addEventListener("DOMContentLoaded", () => {
// //   const btn = document.querySelector(".follow-btn");
// //   if (!btn) return;

// //   btn.addEventListener("click", function () {
// //     const userId = this.dataset.userId;
// //     const url = this.dataset.followUrl;

// //     fetch(url, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         "X-CSRFToken": getCookie("csrftoken"),
// //       },
// //       body: JSON.stringify({ user_id: userId }),
// //     })
// //       .then((res) => res.json())
// //       .then((data) => {
// //         this.innerText = data.status === "followed" ? "Following" : "Follow";
// //       });
// //   });
// // });


/*cmt--------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const viewPostPopup = document.getElementById("viewPostPopup");
  const viewPostImage = document.getElementById("viewPostImage");

  // SAFETY CHECK
  if (!viewPostPopup || !viewPostImage) {
    console.error("Popup or Image element not found!");
    return;
  }

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

