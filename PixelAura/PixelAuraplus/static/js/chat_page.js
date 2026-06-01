console.log("Chat JS Loaded OK");

document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("sendMessageBtn");
  const input = document.querySelector(".chat-input");
  const chatBox = document.getElementById("chatMessages");

  sendBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    const msg = document.createElement("div");
    msg.classList.add("chat-msg", "sent");
    msg.innerHTML = `<div class="chat-bubble">${text}</div>`;

    chatBox.appendChild(msg);
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  });
});
