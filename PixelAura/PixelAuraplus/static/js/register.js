function showPopup(message) {
  document.getElementById("popup-message").textContent = message;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

const step1 = document.querySelector(".step-1");
const step2 = document.querySelector(".step-2");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const stepField = document.getElementById("stepField");
const bottomCard = document.getElementById("bottomCard");
nextBtn.addEventListener("click", function () {

  let valid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("email-error");
  const mobileError = document.getElementById("mobile-error");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  // Clear old errors
  nameError.textContent = "";
  emailError.textContent = "";
  mobileError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Name validation
  if (name === "" || /[0-9]/.test(name)) {
    nameError.textContent = "Name cannot contain numbers";
    valid = false;
  }

  // Email validation
  if (!emailPattern.test(email)) {
    emailError.textContent = "Invalid email format";
    valid = false;
  }

  // Mobile validation
  if (!/^[0-9]{10}$/.test(mobile)) {
    mobileError.textContent = "Please enter a valid 10-digit mobile number";
    valid = false;
  }

  // Password validation
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  // Confirm password
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match";
    valid = false;
  }

  // Only go to Step 2 if valid
  if (valid) {
    step1.classList.remove("active");
    step2.classList.add("active");
    stepField.value = "2";
    bottomCard.style.display = "none";
  }

});

/*-------------------Error popup------------------*/
backBtn.addEventListener("click", function () {
  // step1.querySelectorAll("input").forEach((input) => {
  //   input.disabled = false;
  // });

  // step2.querySelectorAll("input").forEach((input) => {
  //   input.disabled = true;
  // });
  step2.classList.remove("active");
  step1.classList.add("active");
  stepField.value = "1";
  bottomCard.style.display = "block"; // show again
});

/*--------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const suggestionsBox = document.getElementById("username-suggestions");
  const statusMsg = document.getElementById("username-status");

  // ❗ DEMO: usernames already taken (replace with backend check)
  const takenUsernames = ["john123", "rahul99", "pixelmaster"];

  // FUNCTION: Generate username suggestions
  function generateSuggestions(base) {
    return [
      base + Math.floor(Math.random() * 90 + 10),
      base + "_" + Math.floor(Math.random() * 900 + 100),
      base + "_pro",
    ];
  }

  // Show suggestions automatically when input is typed
  usernameInput.addEventListener("input", () => {
    const val = usernameInput.value.trim();

    suggestionsBox.innerHTML = "";
    statusMsg.textContent = "";

    if (val.length < 3) return; // Show only after 3 letters

    const suggestions = generateSuggestions(val);

    suggestions.forEach((name) => {
      const div = document.createElement("div");
      div.classList.add("suggestion");
      div.textContent = name;

      // When clicked → fill username input
      div.onclick = () => {
        usernameInput.value = name;
        checkUsernameAvailability(name);
        suggestionsBox.innerHTML = "";
      };

      suggestionsBox.appendChild(div);
    });
  });

  // Function to check if username exists
  function checkUsernameAvailability(username) {
    // Simulated check
    const isTaken = takenUsernames.includes(username);

    if (isTaken) {
      statusMsg.textContent = "❌ Username already taken";
      statusMsg.className = "status-msg error";
    } else {
      statusMsg.textContent = "✔ Username is available";
      statusMsg.className = "status-msg success";
    }
  }

  // Check when user stops typing
  usernameInput.addEventListener("blur", () => {
    const name = usernameInput.value.trim();
    if (name.length >= 3) {
      checkUsernameAvailability(name);
    }
  });

  usernameInput.addEventListener("input", () => {
    let val = usernameInput.value.trim().toLowerCase();

    // Allow only valid characters
    val = val.replace(/[^a-z0-9._]/g, "");

    // Prevent double dots
    val = val.replace(/\.\.+/g, ".");

    // Prevent starting dot
    if (val.startsWith(".")) val = val.substring(1);

    // Prevent ending dot
    if (val.endsWith(".")) val = val.slice(0, -1);

    usernameInput.value = val;

    if (val.length < 3) {
      statusMsg.textContent = "Username must be at least 3 characters";
      statusMsg.className = "status-msg error";
      return;
    }

    checkUsernameAvailability(val);
  });
  /*---------------------------email validation------------------*/
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const mobileInput = document.getElementById("mobile");
  const mobileError = document.getElementById("mobile-error");

  emailInput.addEventListener("input", function () {
    const email = emailInput.value.trim().toLowerCase();
    emailInput.value = email;

    // Email regex pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      emailError.textContent = "";
      return;
    }

    if (!pattern.test(email)) {
      emailError.textContent =
        "❌ Invalid email format (example: abc@gmail.com).";
    } else {
      emailError.textContent = "";
    }
  });
  // /*-------------------prevent -email submission---------------------*/
  // document.querySelector(".register-form").addEventListener("submit", function (e) {
  // const email = emailInput.value.trim();
  // const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const mobile = mobileInput.value.trim();

  //         if (!pattern.test(email)) {
  //             e.preventDefault();
  //             emailError.textContent = "❌ Please enter a valid email before registering";
  //             emailInput.focus();
  //         }

  //         if (mobile.length !== 10) {
  //           e.preventDefault();
  //           mobileError.textContent =
  //             "❌ Please enter a valid 10-digit mobile number";
  //           mobileInput.focus();
  //         }
  // });

  /*------------------------------mobile valid---------------------*/
  mobileInput.addEventListener("input", function () {
    // Allow numbers only
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

  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("nameError");

  nameInput.addEventListener("input", function () {
    const value = this.value;

    if (/[0-9]/.test(value)) {
      nameError.textContent = "❌ Name cannot contain numbers";
      this.classList.add("input-error", "shake");

      // Remove shake after animation
      setTimeout(() => {
        this.classList.remove("shake");
      }, 300);
    } else {
      nameError.textContent = "";
      this.classList.remove("input-error");
    }
  });

  const passwordInput = document.getElementById("password");
  const confirmInput = document.getElementById("confirm_password");

  passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;

    if (password.length < 6) {
      passwordError.textContent = "❌ Password must be at least 6 characters";
    } else {
      passwordError.textContent = "";
    }
  });

  confirmInput.addEventListener("input", function () {
    const password = passwordInput.value;
    const confirmPassword = confirmInput.value;

    if (confirmPassword !== password) {
      confirmPasswordError.textContent = "❌ Passwords do not match";
    } else {
      confirmPasswordError.textContent = "";
    }
  });

  const birthdateInput = document.getElementById("birthdate");
  const birthdateError = document.getElementById("birthdateError");

  birthdateInput.addEventListener("input", function () {
    const dateValue = birthdateInput.value; // format: yyyy-mm-dd

    if (!dateValue) return;

    const year = dateValue.split("-")[0];

    if (year.length > 4) {
      birthdateError.textContent = "Year must be 4 digits only";
      birthdateInput.value = "";
    } else {
      birthdateError.textContent = "";
    }
  });
  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() - 13,
    today.getMonth(),
    today.getDate(),
  );
  birthdateInput.max = maxDate.toISOString().split("T")[0];

//   

document.querySelector(".register-form").addEventListener("button", function (e) {

 const username = document.getElementById("username").value.trim();

 if (username.length < 3) {
   e.preventDefault();
 }

});
});
