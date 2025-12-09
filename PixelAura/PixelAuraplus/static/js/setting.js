
  const toggle = document.getElementById("privacyToggle");
  const statusText = document.getElementById("privacyStatus");

  toggle.addEventListener("change", function () {
    if (this.checked) {
      statusText.textContent = "Private";
    } else {
      statusText.textContent = "Public";
    }
  });

