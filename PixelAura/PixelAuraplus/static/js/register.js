
    const step1 = document.querySelector('.step-1');
    const step2 = document.querySelector('.step-2');
    const nextBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backBtn');
    const stepField = document.getElementById('stepField');
    const bottomCard = document.getElementById('bottomCard');

    nextBtn.addEventListener('click', function () {
        step1.classList.remove('active');
        step2.classList.add('active');
        stepField.value = '2';
        bottomCard.style.display = 'none';   // hide "Already have an account?"
    });

    backBtn.addEventListener('click', function () {
        step2.classList.remove('active');
        step1.classList.add('active');
        stepField.value = '1';
        bottomCard.style.display = 'block';  // show again
    });

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
                base + "_pro"
            ];
        }

        // Show suggestions automatically when input is typed
        usernameInput.addEventListener("input", () => {
            const val = usernameInput.value.trim();

            suggestionsBox.innerHTML = "";
            statusMsg.textContent = "";

            if (val.length < 3) return; // Show only after 3 letters

            const suggestions = generateSuggestions(val);

            suggestions.forEach(name => {
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

    emailInput.addEventListener("input", function () {
        const email = emailInput.value.trim();

        // Email regex pattern
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            emailError.textContent = "";
            return;
        }

        if (!pattern.test(email)) {
            emailError.textContent = "❌ Invalid email format (example: abc@gmail.com)";
        } else {
            emailError.textContent = "";
        }
    });
        document.querySelector(".register-form").addEventListener("submit", function (e) {
        const email = emailInput.value.trim();
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!pattern.test(email)) {
            e.preventDefault();
            emailError.textContent = "❌ Please enter a valid email before registering";
            emailInput.focus();
        }
    });
    /*-------------------------------register-alert--------------------*/
  



    });
    