document.addEventListener("DOMContentLoaded", function () {
const currentPage = window.location.pathname.split("/").pop();

document
  .querySelectorAll(".ac-main-links a, .ac-settings a")
  .forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (currentPage === linkPage) {
      const targetDiv = link.querySelector(".ac-link, .ac-item");
      if (targetDiv) {
        targetDiv.classList.add("ac-link-active");
      }
    }
  });

const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const popup = document.getElementById("popup");

openBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

setTimeout(() => {
  document.querySelectorAll(".toast").forEach((t) => t.remove());
}, 3000);

/*----------------username------------------*/
const usernameInput = document.getElementById("username");
const usernameError = document.getElementById("username-error");

usernameInput.addEventListener("input", function () {
  let val = usernameInput.value;

  // convert to lowercase automatically
  val = val.toLowerCase();

  // allow only valid characters
  val = val.replace(/[^a-z0-9._]/g, "");

  // prevent starting dot
  if (val.startsWith(".")) {
    usernameError.textContent = "❌ Username cannot start with '.'";
  }

  // prevent ending dot
  else if (val.endsWith(".")) {
    usernameError.textContent = "❌ Username cannot end with '.'";
  } else {
    usernameError.textContent = "";
  }

  usernameInput.value = val;
});

/*----------------email------------------*/
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

emailInput.addEventListener("input", function () {
  let email = emailInput.value;

  // convert to lowercase
  email = email.toLowerCase();

  // remove spaces
  email = email.replace(/\s/g, "");

  emailInput.value = email;

  // email pattern
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (email === "") {
    emailError.textContent = "";
    return;
  }

  if (!pattern.test(email)) {
    emailError.textContent = "❌ Enter a valid email (example: abc@gmail.com)";
  } else {
    emailError.textContent = "";
  }
});

/*----------------phone------------------*/
const mobileInput = document.getElementById("mobile");
const mobileError = document.getElementById("mobile-error");

mobileInput.addEventListener("input", function () {
  // allow only numbers
  this.value = this.value.replace(/\D/g, "");

  const mobile = this.value;

  if (mobile === "") {
    mobileError.textContent = "";
    return;
  }

  if (mobile.length < 10) {
    mobileError.textContent = "❌ Mobile number must be 10 digits";
  } else if (mobile.length > 10) {
    mobileError.textContent = "❌ Mobile number cannot exceed 10 digits";
  } else {
    mobileError.textContent = "";
  }
});

/*----------------submit button------------------*/
const form = document.getElementById("update-register-form");

form.addEventListener("submit", function (e) {
  const usernameError = document.getElementById("username-error").textContent;
  const emailError = document.getElementById("email-error").textContent;
  const mobileError = document.getElementById("mobile-error").textContent;
  const birthdateError = document.getElementById("birthdateError").textContent;

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const birthdate = document.getElementById("birthdate").value.trim();

  if (
    username === "" ||
    email === "" ||
    mobile === "" ||
    birthdate === "" ||
    usernameError !== "" ||
    emailError !== "" ||
    mobileError !== "" ||
    birthdateError !== ""
  ) {
    e.preventDefault(); // stop form submit
    alert("Please fix all errors before submitting.");
  }
});



});
