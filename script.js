// Function to Open Chatbox
function openChat() {
    let chatBox = document.createElement("div");
    chatBox.id = "chatBox";
    chatBox.style.position = "fixed";
    chatBox.style.bottom = "10px";
    chatBox.style.right = "10px";
    chatBox.style.width = "300px";
    chatBox.style.height = "400px";
    chatBox.style.background = "#222";
    chatBox.style.color = "white";
    chatBox.style.border = "1px solid purple";
    chatBox.style.padding = "10px";
    chatBox.style.borderRadius = "10px";
    chatBox.innerHTML = `
        <h3 style="color: purple; text-align: center;">Chat with Meghana</h3>
        <input type="email" id="userEmail" placeholder="Enter your email" style="width: 100%; padding: 5px; margin-bottom: 5px;">
        <textarea id="chatMessage" style="width: 100%; height: 60%;"></textarea>
        <button onclick="sendMessage()" style="width: 100%; background: purple; color: white; padding: 5px; margin-top: 5px;">Send</button>
        <button onclick="closeChat()" style="width: 100%; background: red; color: white; padding: 5px; margin-top: 5px;">Close</button>
    `;
    document.body.appendChild(chatBox);
}

// Function to Close Chatbox
function closeChat() {
    let chatBox = document.getElementById("chatBox");
    if (chatBox) {
        document.body.removeChild(chatBox);
    }
}

// Function to Send Message via Email
function sendMessage() {
    let userMessage = document.getElementById("chatMessage").value;
    let userEmail = document.getElementById("userEmail").value;

    if (userMessage.trim() === "" || userEmail.trim() === "") {
        alert("Please enter your email and message.");
        return;
    }

    let templateParams = {
        user_email: userEmail,
        message: userMessage
    };

    emailjs.send("onmeghana@gmail.com", "onmeghana@gmail.com", templateParams)
        .then(function (response) {
            alert("Message sent successfully!");
            closeChat();
        }, function (error) {
            alert("Failed to send message. Try again.");
        });
}